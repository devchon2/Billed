/**
 * @jest-environment jsdom
 */

import { fireEvent, screen } from "@testing-library/dom";
import NewBillUI from "../views/NewBillUI.js";
import NewBill from "../containers/NewBill.js";

describe("Given I am connected as an employee", () => {
    test("the file button is disabled by default", () => {
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname });
      };
      localStorage.setItem(
        "user",
        JSON.stringify({
          type: "Employee",
          email: "employee@test.tld",
          password: "azerty",
          status: "connected",
        })
      );
      const UI = NewBillUI();
      document.body.innerHTML = UI;
      const newbill = new NewBill({ document,localStorage, onNavigate});
        console.log(screen.innerHTML);
      // expect(screen.getByTestId("file")).toBeTruthy();
      expect(screen.getByTestId("file").getAttribute("disabled")).toBeTruthy();
    })
  });
//   });
//       describe("then file button is enabled when checkInputs return true", () => {
//         test("when checkInputs return true", () => {
//           const UI = NewBillUI();
//           document.body.innerHTML = UI;
//           const newBill = new NewBill({ document });

//           newBill.checkInputs = jest.fn(() => true);
//           newBill.checkInputs();
//           expect(
//             screen.getByTestId("file").getAttribute("disabled", false)
//           ).toBeTruthy();
//         });
//         test("when checkInputs return false", () => {
//           const UI = NewBillUI();
//           document.body.innerHTML = UI;
//           const newBill = new NewBill({ document });

//           newBill.checkInputs = jest.fn(() => false);
//           newBill.checkInputs();
//           expect(
//             screen.getByTestId("file").getAttribute("disabled")
//           ).toBeTruthy();
//         });
//       });

//     describe("then the submit button is disabled until file is selected", () => {
//       test("when file is not selected ", () => {
//         const UI = NewBillUI();
//         document.body.innerHTML = UI;
//         const newBill = new NewBill({ document });

//         expect(screen.getByTestId("btn-send-bill")).toBeTruthy();
//         expect(
//           screen.getByTestId("btn-send-bill").getAttribute("disabled")
//         ).toBeTruthy();
//       });
//       test("when file is selected ", () => {
//         const UI = NewBillUI();
//         document.body.innerHTML = UI;
//         const newBill = new NewBill({ document });

//         newBill.fileButton.setAttribute("disabled", false);
//         expect(screen.getByTestId("btn-send-bill")).toBeTruthy();
//         expect(
//           screen.getByTestId("btn-send-bill").getAttribute("disabled")
//         ).toBeFalsy();
//       });
//     });

//   describe("When handleChangeFile", () => {
//     test("it should trigger the handleChangeFile function", () => {
//       const onNavigate = (pathname) => {
//         document.body.innerHTML = ROUTES({ pathname });
//       };
//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           type: "Employee",
//           email: "employee@test.tld",
//           password: "azerty",
//           status: "connected",
//         })
//       );
//       const html = NewBillUI();
//       document.body.innerHTML = html;

//       const newBill = new NewBill({ document, onNavigate, localStorage });

//       const handleChangeFile = jest.fn(newBill.handleChangeFile);
//       const file = screen.getByTestId("file");
//       file.addEventListener("change", handleChangeFile);
//       fireEvent.change(file);
//       expect(handleChangeFile).toHaveBeenCalled();
//     });

//     test("it should verify the type of file", () => {
//       const UI = NewBillUI();
//       document.body.innerHTML = UI;
//       const newBill = new NewBill({ document });
//       const file = screen.getByTestId("file");
//       file.addEventListener("change", newBill.handleChangeFile);
//       fireEvent.change(file, {
//         target: {
//           files: [new File(["test"], "test.png", { type: "image/png" })],
//         },
//       });
//       expect(newBill.file.type).toBe("image/png");
//     });
//     test("it should reject the file if it is not an image", () => {
//       const UI = NewBillUI();
//       document.body.innerHTML = UI;
//       const newBill = new NewBill({ document });
//       const file = screen.getByTestId("file");
//       file.addEventListener("change", newBill.handleChangeFile);
//       fireEvent.change(file, {
//         target: {
//           files: [new File(["test"], "test.pdf", { type: "application/pdf" })],
//         },
//       });
//       expect(newBill.file).toBe(null);
//       expect(file.value).toBe("");
//       expect(
//         screen.getByText(
//           "Mauvais format de fichier! \n Seuls les fichiers .jpg, .jpeg, .png et .gif sont acceptés"
//         )
//       );
//       expect(window.alert).toBeCalledWith(
//         "Mauvais format de fichier! \n Seuls les fichiers .jpg, .jpeg, .png et .gif sont acceptés"
//       );
//     });
//   });

//   describe("When handleSubmit", () => {
//     test("Then it should trigger the handleSubmit function", () => {
//       const html = NewBillUI();
//       document.body.innerHTML = html;
//       const onNavigate = (pathname) => {
//         document.body.innerHTML = ROUTES({ pathname });
//       };
//       const newBill = new NewBill({ document, onNavigate, localStorage });
//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           type: "Employee",
//           email: "employee@test.tld",
//           password: "azerty",
//           status: "connected",
//         })
//       );

//       const handleSubmit = jest.fn(newBill.handleSubmit);
//       const form = screen.getByTestId("form-new-bill");
//       form.addEventListener("change", handleSubmit);
//       fireEvent.change(form);
//       expect(handleSubmit).toHaveBeenCalled();
//     });
//   });
// })