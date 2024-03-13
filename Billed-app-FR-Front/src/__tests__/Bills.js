/**
 * @jest-environment jsdom
 */

import { fireEvent, screen, waitFor } from "@testing-library/dom";
import BillsUI from "../views/BillsUI.js";
import { bills } from "../fixtures/bills.js";
import { ROUTES_PATH, ROUTES } from "../constants/routes.js";
import { localStorageMock } from "../__mocks__/localStorage.js";
import mockStore from "../__mocks__/store.js";
import Bills from "../containers/Bills.js";
import router from "../app/Router.js";
import store from "../__mocks__/store.js";

jest.mock("../app/store", () => mockStore);

describe("Given I am connected as an employee and I am on Bills Page", () => {
    describe("When i look the vertical laayout ", () => {
    test("Then bill icon should be highlighted", async () => {
      Object.defineProperty(window, "localStorage", {
        value: localStorageMock,
      });
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          type: "Employee",
        })
      );
      const root = document.createElement("div");
      root.setAttribute("id", "root");
      document.body.append(root);
      router();
      window.onNavigate(ROUTES_PATH.Bills);
      await waitFor(() => screen.getByTestId("icon-window"));
      const windowIcon = screen.getByTestId("icon-window");
      expect(windowIcon.classList.contains("active-icon")).toEqual(true);
    }),
      test("Then newBill icon in vertical layout shouldn't be highlighted", async () => {
        Object.defineProperty(window, "localStorage", {
          value: localStorageMock,
        });
        window.localStorage.setItem(
          "user",
          JSON.stringify({
            type: "Employee",
          })
        );
        const root = document.createElement("div");
        root.setAttribute("id", "root");
        document.body.append(root);
        router();
        window.onNavigate(ROUTES_PATH.Bills);
        await waitFor(() => screen.getByTestId("icon-mail"));
        const mailIcon = screen.getByTestId("icon-mail");
        expect(mailIcon.classList.contains("active-icon")).toEqual(false);
      });
  });

  describe("When I look at the bills list", () => {
    test("Then bills should be ordered from earliest to latest", () => {
      Object.defineProperty(window, "localStorage", {
        value: localStorageMock,
      });
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          type: "Employee",
        })
      );

      router();
      window.onNavigate(ROUTES_PATH.Bills);
      document.body.innerHTML = BillsUI({ data: bills });

      const dates = screen
        .getAllByTestId("bill-date")
        .map((a) => (a.innerHTML ? a.innerHTML : ""));
      const antiChrono = (a, b) => (a < b ? 1 : -1);
      const datesSorted = dates.sort(antiChrono);
      expect(dates).toEqual(datesSorted);
    });
    test("then bills should be displayed in the page toLocalDateString format", () => {
      document.body.innerHTML = BillsUI({ data: bills });
      const dates = screen
        .getAllByTestId("bill-date")
        .map((date) => (date.innerHTML ? date.innerHTML : ""));
      const dateRegex =
        /^([0-2][0-9]|[3][0-1])\s(Janv|Févr|Mars|Avr|Mai|Juin|Juil|Août|Sept|Oct|Nov|Déc)\.?\s(19|20)\d\d$/;
      dates.forEach((date) => {
        expect(dateRegex.test(date)).toBe(true);
      });
    });
    test("then if i click on the new bill button it call handlenewbill event", () => {
      Object.defineProperty(window, "localStorage", {
        value: localStorageMock,
      });
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          type: "Employee",
        })
      );
      const root = document.createElement("div");
      root.setAttribute("id", "root");
      document.body.append(root);
      router();
      window.onNavigate(ROUTES_PATH.Bills);
      const buttonNewBill = screen.getByTestId("btn-new-bill");
      const handleClickNewBill = jest.fn(bills.handleClickNewBill);
      buttonNewBill.addEventListener("click", handleClickNewBill);
      buttonNewBill.click();
      expect(handleClickNewBill).toHaveBeenCalled();
      expect(screen.getByText("Envoyer une note de frais")).toBeTruthy();
    });
    test("then if i click on the eye icon button i open the modale", async () => {
      
      document.body.innerHTML = BillsUI({ data: bills });
      const onNavigate = jest.fn(() => {});
      new Bills({ document, onNavigate, store: null, localStorage: null });

      $.fn.modal = jest.fn();

      const iconEye = screen.getAllByTestId("icon-eye");

      iconEye.forEach((icon, index) => {
        const handleClickIconEye = jest.fn(bills.handleClickIconEye);

        icon.addEventListener("click", () => handleClickIconEye(icon));
        fireEvent.click(icon);

        expect(handleClickIconEye).toHaveBeenCalled();
        expect(handleClickIconEye).toHaveBeenCalledWith(icon);

        expect(screen.getByText("Justificatif")).toBeTruthy();
      });
    });
  });

  
  describe("When an error occurs on API", () => {
    beforeEach(() => {
      jest.spyOn(mockStore, "bills");
      Object.defineProperty(window, "localStorage", {
        value: localStorageMock,
      });
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          type: "Employee",
          email: "a@a",
        })
      );
      const root = document.createElement("div");
      root.setAttribute("id", "root");
      document.body.appendChild(root);
      router();
    });
    test("then fetches bills from an API and fails with 404 message error", async () => {
      
      window.onNavigate(ROUTES_PATH.Bills);
            await new Promise(process.nextTick);
      document.body.innerHTML = BillsUI({ error: "Erreur 404" });
      const message = await screen.getByText("Erreur 404");
expect(message).toBeTruthy();
    });

    test("fetches messages from an API and fails with 500 message error", async () => {
      window.onNavigate(ROUTES_PATH.Bills);
            await new Promise(process.nextTick);
      document.body.innerHTML = BillsUI({ error: "Erreur 500" });
      const message = await screen.getByText("Erreur 500");
expect(message).toBeTruthy();
    });
  });
});
describe("When I navigate to Bills page", () => {
    beforeEach(() => {
      Object.defineProperty(window, "localStorage", {
        value: localStorageMock,
      });
      localStorage.setItem("user", JSON.stringify({ type: "employee", email: "employee@employee", password: "employee", status: "connected"}));
    });
    test("then fetches bills from mock API GET", async () => {
      const root = document.createElement("div")
      root.setAttribute("id", "root")
      document.body.append(root)
      router()
      window.onNavigate(ROUTES_PATH.Bills)
      document.body.innerHTML = BillsUI({ data: bills })
      await waitFor(() => screen.getByText("Mes notes de frais"))
            })
    
    });