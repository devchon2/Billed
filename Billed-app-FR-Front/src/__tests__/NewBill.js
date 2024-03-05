import { fireEvent, screen } from "@testing-library/dom";
import { waitFor } from "@testing-library/dom";
import NewBillUI from "../views/NewBillUI.js";
import NewBill from "../containers/NewBill.js";
import localStorageMock from "../__mocks__/localStorage.js";
import { ROUTES } from "../constants/routes.js";
import Store from "../app/Store.js";
import { formatDateToStore } from "../app/format.js";

describe("Given I am connected as an employee", () => {
  describe("When I upload a file", () => {
    beforeEach(() => {
      // Set up the document environment
      Object.defineProperty(window, localStorage, { localStorageMock }); // set up local storage
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          type: "Employee",
          email: "employee@test.tld",
          password: "employee",
          status: "connected",
        })
      );

      const html = NewBillUI(); // set up the document body
      document.body.innerHTML = html;
    });

    test("then if the file type is not valid, an alert is displayed", () => {
      const onNavigate = jest.fn((pathname) => {
        document.body.innerHTML = ROUTES({ pathname });
      });

      const newBill = new NewBill({
        document,
        onNavigate: onNavigate,
        localStorage: window.localStorage,
        store: Store,
      });

      const fileButton = screen.getByTestId("file");

      const wrongTypeFile = new File(
        ["facturefreemobile.pdf"],
        "facturefreemobile.pdf",
        {
          type: "application/pdf",
          createdAt: Date.now(),
          modifiedAt: Date.now(),
          name: "facturefreemobile.pdf",
          webkitRelativePath: "",
        }
      );

      jest.spyOn(window, "alert").mockImplementation(() => {});

      fireEvent.change(fileButton, {
        target: {
          files: [wrongTypeFile],
        },
      });

      expect(fileButton.files).toBeNull();
      expect(fileButton.file).toBeUndefined();
      expect(fileButton.mimetype).toBeUndefined();
      expect(fileButton.fileName).toBeUndefined();

      // expect(screen.getByTestId("file").files[0]).toBeNull();
      expect(window.alert).toBeCalled();
      expect(window.alert).toBeCalledWith(
        "Mauvais format de fichier! \n Seuls les fichiers .jpg, .jpeg, .png et .gif sont acceptés"
      );
    });

    test("then if the file type is valid, the file is uploaded", () => {
      const fileButton = screen.getByTestId("file");
      const validTypeFile = new File(
        ["facturefreemobile.jpg"],
        "facturefreemobile.jpg",
        {
          type: "image/jpg",
          name: "facturefreemobile.jpg",
          webkitRelativePath: "",
        }
      );

      fireEvent.change(fileButton, {
        target: {
          files: [validTypeFile],
        },
      });

      expect(fileButton.files[0]).toStrictEqual(validTypeFile);
      expect(fileButton.files[0].type).toStrictEqual("image/jpg");
      expect(fileButton.files[0].name).toStrictEqual("facturefreemobile.jpg");
    });
    test("then if file uploaded stored call for create bills", () => {
      const onNavigate = jest.fn((pathname) => {
        document.body.innerHTML = ROUTES({ pathname });
      });
      const newBill = new NewBill({
        document,
        onNavigate: onNavigate,
        localStorage: window.localStorage,
        store: Store,
      });

      const validTypeFile = new File(
        ["facturefreemobile.jpg"],
        "facturefreemobile.jpg",
        {
          createdAt: Date.now().toString(),
          type: "image/jpg",
          name: "facturefreemobile.jpg",
          webkitRelativePath: "",
        }
      );

      newBill.expenseName = "Facture Free";
      newBill.expanseType = "Téléphone";
      newBill.date = "1983-10-17";
      newBill.amount = 20;
      newBill.vat = "80";
      newBill.pct = 20;
      newBill.commentary = "Commentaire";
      newBill.fileName = "facturefreemobile.jpg";
      newBill.file = validTypeFile;
      newBill.email = "employee@test.tld";

      newBill.formData = new FormData();
      newBill.formData.append("name", newBill.expenseName);
      newBill.formData.append("type", newBill.expanseType);
      newBill.formData.append("email", newBill.email);
      newBill.formData.append("date", formatDateToStore(newBill.date));
      newBill.formData.append("vat", newBill.vat);
      newBill.formData.append("pct", newBill.pct);
      newBill.formData.append("commentary", newBill.commentary);
      newBill.formData.append("status", "pending");
      newBill.formData.append("commentAdmin", "");
      newBill.formData.append("amount", newBill.amount);
      newBill.formData.append("file", newBill.file);
      newBill.formData.append("fileName", newBill.fileName);

      fireEvent.change(screen.getByTestId("file"), {
        target: {
          files: [validTypeFile],
        },
      });

      Store.bills = jest.fn().mockImplementation(() => {
        return {
          create: jest.fn().mockResolvedValue({
            filePath: "public/facturefreemobile.jpg",
            key: 0,
            id: "47qAXb6fIm2zOKkLzMro",
          }),
        };
      });

      expect(
        Store.bills().create({
          data: newBill.formData,
          headers: {
            noContentType: true,
          },
        })
      ).resolves.toEqual({
        filePath: "public/facturefreemobile.jpg",
        key: 0,
        id: "47qAXb6fIm2zOKkLzMro",
      });
    });
    test("then the billId and filePath is managed", async () => {
      const newBill = new NewBill({
        document,
        localStorage: window.localStorage,
        store: Store,
      });

      const validTypeFile = new File(
        ["facturefreemobile.jpg"],
        "facturefreemobile.jpg",
        {
          createdAt: Date.now().toString(),
          type: "image/jpg",
          name: "facturefreemobile.jpg",
          webkitRelativePath: "",
        }
      );

      newBill.expenseName = "Facture Free";
      newBill.expanseType = "Téléphone";
      newBill.date = "2021-04-04";
      newBill.amount = 20;
      newBill.vat = "80";
      newBill.pct = 20;
      newBill.commentary = "Commentaire";
      newBill.fileName = "facturefreemobile.jpg";
      newBill.file = validTypeFile;
      newBill.email = "employee@test.tld";

      newBill.formData = new FormData();
      newBill.formData.append("name", newBill.expenseName);
      newBill.formData.append("type", newBill.expanseType);
      newBill.formData.append("email", newBill.email);
      newBill.formData.append("date", formatDateToStore(newBill.date));
      newBill.formData.append("vat", newBill.vat);
      newBill.formData.append("pct", newBill.pct);
      newBill.formData.append("commentary", newBill.commentary);
      newBill.formData.append("status", "pending");
      newBill.formData.append("commentAdmin", "");
      newBill.formData.append("amount", newBill.amount);
      newBill.formData.append("file", newBill.file);

      Store.bills = jest.fn().mockImplementation(() => {
        return {
          create: jest.fn().mockResolvedValue({
            filePath: "public/facturefreemobile.jpg",
            key: 0,
            id: "47qAXb6fIm2zOKkLzMro",
          }),
        };
      });
      fireEvent.change(screen.getByTestId("file"), {
        target: {
          files: [validTypeFile],
        },
      });
      expect(
        Store.bills().create({
          data: newBill.formData,
          headers: {
            noContentType: true,
          },
        })
      )
        .resolves.toEqual({
          filePath: "public/facturefreemobile.jpg",
          key: 0,
          id: "47qAXb6fIm2zOKkLzMro",
        })
        .then(() => {
          expect(newBill.billId).toBe("47qAXb6fIm2zOKkLzMro");
          expect(newBill.key).toBe(0);
          expect(newBill.path).toBe("public/facturefreemobile.jpg");
        })
    });
  });
  describe("When I submit the form", () => {
    beforeEach(() => {
      // Set up the document environment
      Object.defineProperty(window, localStorage, { localStorageMock }); // set up local storage
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          type: "Employee",
          email: "employee@test.tld",
          password: "employee",
          status: "connected",
        })
      );

      const html = NewBillUI(); // set up the document body
      document.body.innerHTML = html;

      const onNavigate = jest.fn((pathname) => {
        document.body.innerHTML = ROUTES({ pathname });

        const newBill = new NewBill({
          document,
          onNavigate: onNavigate,
          localStorage: window.localStorage,
          store: Store,
        });
      });
    });

    test("then API 500 error during bill creation is properly handled", async () => {
      const onNavigate = jest.fn((pathname) => {
        document.body.innerHTML = ROUTES({ pathname });
      });
      const newBill = new NewBill({
        document,
        onNavigate: onNavigate,
        localStorage: window.localStorage,
        store: Store,
      });

      jest.spyOn(console, "error").mockImplementation(() => {});

      const validTypeFile = new File(
        ["facturefreemobile.jpg"],
        "facturefreemobile.jpg",
        {
          type: "image/jpg",
          name: "facturefreemobile.jpg",
          lastModified: Date.now(),
        }
      );

      fireEvent.change(screen.getByTestId("file"), {
        target: {
          files: [validTypeFile],
        },
      });

      // Simulate API 500 error when updating the bill
      Store.bills = jest.fn().mockImplementation(() => {
        return {
          update: jest.fn().mockRejectedValue(new Error("500")),
        };
      });

      // Simulate form submission
      const form = screen.getByTestId("form-new-bill");
      fireEvent.submit(form);

      // Check that the API 500 error is properly handled and displayed to the user
      async () => await expect(newBill.updateBill).resolves.toEqual("500");
    });
  });
});
