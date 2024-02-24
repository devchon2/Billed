/**
 * @jest-environment jsdom
 */

import { fireEvent, screen, waitFor } from "@testing-library/dom";
import NewBillUI from "../views/NewBillUI.js";
import NewBill from "../containers/NewBill.js";
import localStorageMock from "../__mocks__/localStorage.js";
import { mockedBills } from "../__mocks__/store.js";
import { ROUTES } from "../constants/routes.js";

describe("when i'm landed on newBill page ", () => {
  Object.defineProperty(window, localStorage, { localStorageMock });

  localStorage.setItem(
    "user",
    JSON.stringify({
      type: "Employee",
      password: "azerty",
      email: "employee",
      status: "connected",
    })
  );

  const html = NewBillUI(); // set up the document body
  document.body.innerHTML = html;

  describe("when I wanted to load a file", () => {
    const newbill = new NewBill({
      document,
      localStorage,
      onNavigate: jest.fn((pathname) => {
        document.body.innerHTML = ROUTES({ pathname });
      }),
      store: {
        bills: jest.fn(() => ({
          create: jest.fn(async (formData) => {
            await Promise.resolve(mockedBills.create(formData));
          }),
        })),
      },
    });
    const fileInput = screen.getByTestId("file");

    const validTypeFile = new File(
      ["facturefreemobile.jpg"],
      "facturefreemobile.jpg",
      {
        type: "image/jpg",
      }
    );
    const formData = new FormData();
    formData.append("file", validTypeFile);
    formData.append("email", "employee@test.tld");

    test("then If I load a wrong file", () => {
      const wrongTypeFile = new File(
        ["facturefreemobile.pdf"],
        "facturefreemobile.pdf",
        {
          type: "application/pdf",
        }
      );
      const mockAlert = jest.spyOn(window, "alert");

      fireEvent.change(file, { target: { files: [wrongTypeFile] } });

      // console.log(document.body.innerHTML);
      expect(fileInput.files).toBeNull();
      expect(fileInput.value).toBe("");
      expect(mockAlert).toBeCalledWith(
        "Mauvais format de fichier! \n Seuls les fichiers .jpg, .jpeg, .png et .gif sont acceptés"
      );
    });

    test("then If I load a valid file", () => {
      fireEvent.change(file, { target: { files: [validTypeFile] } });

      expect(fileInput.files[0]).toStrictEqual(validTypeFile);
      expect(fileInput.files[0].type).toStrictEqual("image/jpg");
      expect(fileInput.files[0].name).toStrictEqual("facturefreemobile.jpg");
    });

    test("then a call for createbill is made", () => {
      jest.spyOn(newbill, "handleChangeFile");

      const handleChange = jest.fn(() => newbill.handleChangeFile);

      fireEvent.change(file, { target: { files: [validTypeFile] } });

      async () => await expect(handleChange).toHaveBeenCalled();
      async () => await expect(newbill.store.bills.create).toHaveBeenCalled();
      async () => await expect(newbill.store.bills.create).toHaveBeenCalledWith({
            data: formData,
            headers: { noContentType: true },
          })
          .resolves.toEqual({
            filePath: "public/facturefreemobile.jpg",
            key: "47qAXb6fIm2zOKkLzMro",
            id: 0,
          });
    });
    test("then the bill is created and billID ,key ,id are managed", () => { ///A revoir avec Stéphane 
      async () =>
        await expect(newbill.store.bills.create)
          .toHaveBeenCalledWith({
            data: formData,
            headers: { noContentType: true },
          })
          .then(({ filePath, id, key }) => {
            expect(newbill.billId).toBe(id);
            expect(newbill.key).toBe(key);
            expect(newbill.path).toBe(filePath.replace("public\\", "public/"));
            expect(newbill.fileName).toBe("facturefreemobile.jpg");
          })
          .catch((error) => expect(console.error(error)).toBeCalled());
    });
  });
});
