import { ROUTES_PATH } from '../constants/routes.js'
import { formatStatus } from "../app/format.js"
import Logout from "./Logout.js"

export default class Bills {
  constructor({ document, onNavigate, store, localStorage }) {
    this.document = document
    this.onNavigate = onNavigate
    this.store = store
    this.localStorage = localStorage
    const buttonNewBill = this.document.querySelector(`button[data-testid="btn-new-bill"]`)
    if (buttonNewBill) buttonNewBill.addEventListener('click', this.handleClickNewBill.bind(this))
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
    const imgWidth = '100%'
    $('#modaleFile').find(".modal-body").html(`<div style='text-align: center;' class="bill-proof-container"><img width=${imgWidth} src=${billUrl} alt="Bill" /></div>`)
    $('#modaleFile').modal('show')
  }

  
  getBills = () => {
    
    if (this.store) {
      
      return this.store
      .bills()
      .list()
      .then(snapshot => {
        
        const bills = snapshot
          .map(bill => {
            
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
        return bills
      })
    }
  }
}
