import { ROUTES_PATH } from '../constants/routes.js'
import { formatDateForDisplay, formatStatus } from "../app/format.js"
import Logout from "./Logout.js"

export default class Bills {
  constructor({ document, onNavigate, store, localStorage }) {
    this.document = document
    this.onNavigate = onNavigate
    this.store = store
    const buttonNewBill = this.document.querySelector(`button[data-testid="btn-new-bill"]`)
    if (buttonNewBill) buttonNewBill.addEventListener('click', this.handleClickNewBill)
    const iconEye = this.document.querySelectorAll(`div[data-testid="icon-eye"]`)
    if (iconEye) iconEye.forEach(icon => {
      icon.addEventListener('click', () => this.handleClickIconEye(icon))
    })
    const iconDownload = this.document.querySelectorAll(`div[data-testid="icon-download"]`)
    if (iconDownload) iconDownload.forEach(icon => {
      icon.addEventListener('click', () => this.handleClickIconDownload())
    })
    new Logout({ document: this.document, localStorage: this.localStorage, onNavigate: this.onNavigate })
  }

  handleClickNewBill = () => {
    this.onNavigate(ROUTES_PATH['NewBill'])
  }

  handleClickIconEye = (icon) => {
    const billUrl = icon.getAttribute("data-bill-url")
    const imgWidth = Math.floor($('#modaleFile').width() * 0.5)
    $('#modaleFile').find(".modal-body").html(`<div style='text-align: center;' class="bill-proof-container"><img width=${imgWidth} src=${billUrl} alt="Bill" /></div>`)
    $('#modaleFile').modal('show')
  }

  handleClickIconDownload = () => {
    const link = document.getElementById('download')
  link.click()    
    

    
  }

  getBills = () => {
    debugger
    if (this.store) {
      debugger
      return this.store
      .bills()
      .list()
      .then(snapshot => {
        debugger
        const bills = snapshot
          .map(bill => {
            debugger
            try {
              return {
                ...bill,
                date: bill.date,
                status: formatStatus(bill.status)
              }
            } catch(e) {
              // if for some reason, corrupted data was introduced, we manage here failing formatDate function
              // log the error and return unformatted date in that case
              console.log(e,'for',bill)
              return {
                ...bill,
                date: bill.date,
                status: formatStatus(bill.status)
              }
            }
          })
          console.log('length', bills.length)
        return bills
      })
    }
  }
}
