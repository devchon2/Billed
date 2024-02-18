/**
 * @jest-environment jsdom
 */

import { fireEvent, screen } from "@testing-library/dom";
import NewBillUI from "../views/NewBillUI.js";
import NewBill from "../containers/NewBill.js";
import localStorageMock from "../__mocks__/localStorage.js";
import { ROUTES } from "../constants/routes.js";
import Store from "../app/Store.js";

describe("Given I am connected as an employee", () => {

  describe("When I could upload a file", () => {
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
      const greantedMimeType = [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "image/gif",
      ];

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

      expect(fileButton.files).toBeNull()
      expect(fileButton.file).toBeUndefined();
      expect(fileButton.mimetype).toBeUndefined()
      expect(fileButton.fileName).toBeUndefined()


      // expect(screen.getByTestId("file").files[0]).toBeNull();
      expect(window.alert).toBeCalled();
      expect(window.alert).toBeCalledWith(
        "Mauvais format de fichier! \n Seuls les fichiers .jpg, .jpeg, .png et .gif sont acceptés"
      );
    });
  });
});
