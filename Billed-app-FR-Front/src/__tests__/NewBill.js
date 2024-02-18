/**
 * @jest-environment jsdom
 */

import { fireEvent, screen } from "@testing-library/dom";
import NewBillUI from "../views/NewBillUI.js";
import NewBill from "../containers/NewBill.js";
import localStorageMock from "../__mocks__/localStorage.js";
import { mockedBills } from "../__mocks__/store.js";
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
      new NewBill({
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

      const expenseName = "Facture Free";
      const expanseType = "Téléphone";
      const date = '01/01/2021';
      const amount = 20;
      const vat = "80";
      const pct = 20;
      const commentary = "Commentaire";
      const fileName = "facturefreemobile.jpg";
      const file = validTypeFile;
      const email = "employee@test.tld";

      const formData = new FormData();
      formData.append("name", expenseName);
      formData.append("type", expanseType);
      formData.append("email", email);
      formData.append("date",date);
      formData.append("vat", vat);
      formData.append("pct", pct);
      formData.append("commentary", commentary);
      formData.append("status", "pending");
      formData.append("commentAdmin", "");
      formData.append("amount", amount);
      formData.append("file", file);
      formData.append("fileName", fileName);

      fireEvent.change(screen.getByTestId("file"), {
        target: {
          files: [validTypeFile],
        },
      });

      Store.bills = jest.fn().mockImplementation(() => {
        return {
          create: jest.fn().mockResolvedValue({
            filePath: "public/facturefreemobile.jpg",
            key: "47qAXb6fIm2zOKkLzMro",
            id: "47qAXb6fIm2zOKkLzMro",
          }),
        };
      });

      expect(
        Store.bills().create({
          data: formData,
          headers: {
            noContentType: true,
          },
        })
      ).resolves.toEqual({
        filePath: "public/facturefreemobile.jpg",
        key: "47qAXb6fIm2zOKkLzMro",
        id: "47qAXb6fIm2zOKkLzMro",
      });
    });
  });
});
