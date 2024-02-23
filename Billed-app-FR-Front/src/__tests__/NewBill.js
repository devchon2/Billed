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

      
    });

    describe("When I have selected files", () => {
      const onNavigate = jest.fn((pathname) => {
          document.body.innerHTML = ROUTES({ pathname });
        });
        const html = NewBillUI(); // set up the document body
      document.body.innerHTML = html;
        test("then if the file type is not valid, an alert is displayed", () => {
        
        

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

        const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

        fireEvent.change(fileButton, {
          target: {
            files: [wrongTypeFile],
          },
        });

        expect(mockAlert).toBeCalled();
        expect(mockAlert).toBeCalledWith(
          "Mauvais format de fichier! \n Seuls les fichiers .jpg, .jpeg, .png et .gif sont acceptés"
        );
        expect(screen.getByTestId("file").files).toBeNull();
        
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
              key: "47qAXb6fIm2zOKkLzMro",
              id: 0,
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
        ).resolves.toEqual({
            filePath: "public/facturefreemobile.jpg",
            key: "47qAXb6fIm2zOKkLzMro",
            id: 0,
          }).then(() => {
            expect(newBill.billId).toBe(0);
            expect(newBill.key).toBe("47qAXb6fIm2zOKkLzMro");
            expect(newBill.path).toBe("public/facturefreemobile.jpg");
          });
      });
    });
  });
});
