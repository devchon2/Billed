/**
 * @jest-environment jsdom
 */

import {screen, waitFor} from "@testing-library/dom"
import BillsUI from "../views/BillsUI.js"
import { bills } from "../fixtures/bills.js"
import { ROUTES_PATH, ROUTES } from "../constants/routes.js";
import {localStorageMock} from "../__mocks__/localStorage.js";

import router from "../app/Router.js";
import { formatDateForDisplay, formatDateToSort } from "../app/format.js";

describe("Given I am connected as an employee", () => {
  describe("When I am on Bills Page", () => {
    test("Then bill icon in vertical layout should be highlighted", async () => {

      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
      const root = document.createElement("div")
      root.setAttribute("id", "root")
      document.body.append(root)
      router()
      window.onNavigate(ROUTES_PATH.Bills)
      await waitFor(() => screen.getByTestId('icon-window'))
      const windowIcon = screen.getByTestId('icon-window')
      expect(windowIcon.classList.contains("active-icon")).toEqual(true)

    }),
    test("Then NewBill icon in vertical layout shouldn't be highlighted", async () => {

      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
      const root = document.createElement("div")
      root.setAttribute("id", "root")
      document.body.append(root)
      router()
      window.onNavigate(ROUTES_PATH.Bills)
      await waitFor(() => screen.getByTestId('icon-mail'))
      const mailicon = screen.getByTestId('icon-mail')
      expect(mailicon.classList.contains("active-icon")).toEqual(false)

    }),
    test("Then bills should be ordered from earliest to latest", () => {

      document.body.innerHTML = BillsUI({ data: bills })
            
      const dates = screen.getAllByTestId('bill-date').map(a => a.innerHTML ? a.innerHTML : '')
      const antiChrono = (a, b) => ((a < b) ? 1 : -1)
      const datesSorted = dates.sort(antiChrono)
      expect(dates).toEqual(datesSorted)
    }),
    test("then bills should be displayed in the page toLocalDateString format", () => {
      document.body.innerHTML = BillsUI({ data: bills })
      const dates = screen.getAllByTestId('bill-date').map(date => date.innerHTML ? date.innerHTML : '')
      const dateRegex = /^([0-2][0-9]|[3][0-1])\s(Janv|Févr|Mars|Avr|Mai|Juin|Juil|Août|Sept|Oct|Nov|Déc)\.?\s(19|20)\d\d$/
      dates.forEach(date => {
        expect(dateRegex.test(date)).toBe(true)
      }
      )
    }),
    test("then if i click on the new bill button it call handlenewbill event", () => {
      document.body.innerHTML = BillsUI({ data: [] })
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const billsUI = new BillsUI({ document, onNavigate, localStorage: window.localStorage })
      const buttonNewBill = screen.getByTestId('btn-new-bill')
      const handleClickNewBill = jest.fn(billsUI.handleClickNewBill)
      buttonNewBill.addEventListener('click', handleClickNewBill)
      buttonNewBill.click()
      expect(handleClickNewBill).toHaveBeenCalled()      
    }),
    test('then if i click on the eye icon button', () => {
      document.body.innerHTML = BillsUI({ data: bills })
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const billsUI = new BillsUI({ document, onNavigate, localStorage: window.localStorage })
      const iconEye = screen.getAllByTestId('icon-eye')
      const handleClickIconEye = jest.fn(billsUI.handleClickIconEye)
      iconEye.forEach(icon => {
        icon.addEventListener('click', handleClickIconEye(icon))
              icon.click()
      expect(handleClickIconEye).toHaveBeenCalled()
})
      
      }),
    test('then if i click on the download icon button', () => {
      document.body.innerHTML = BillsUI({ data: bills })
      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const billsUI = new BillsUI({ document, onNavigate, localStorage: window.localStorage })
      const iconDownload = screen.getAllByTestId('icon-download')
      
      iconDownload.forEach((icon,index) => {
        const handleClickIconDownload = jest.fn(billsUI.handleClickIconDownload)
        expect(icon.getAttribute('data-bill-url')).toBeTruthy() 
        expect(icon.getAttribute('data-bill-url')).toBe(bills[index].fileUrl)
        icon.addEventListener('click', handleClickIconDownload)
        icon.click()
            expect(handleClickIconDownload).toHaveBeenCalled()
})
      })

      
    })
  })
  
