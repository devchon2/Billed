import { ROUTES_PATH } from '../constants/routes.js'
import Logout from "./Logout.js"

export default class NewBill {
  constructor({ document, onNavigate, store, localStorage }) {
    this.document = document
    this.onNavigate = onNavigate
    this.store = store

    // Catch form new bill
    this.formNewBill = this.document.querySelector(`form[data-testid="form-new-bill"]`)
    this.formNewBill.addEventListener("submit", this.handleSubmit)

    // Catch file input
    this.fileInput = this.document.querySelector(`input[data-testid="file"]`)
    this.fileInput.addEventListener("change", this.handleChangeFile)

    // Init file properties
    this.file = null
    this.filePath = null
    this.fileName = null
    this.billId = null
    this.grantedMimeType = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
    this.mimeType = null


    // innit user email
    this.email = JSON.parse(localStorage.getItem("user")).email

    // Init FormData
    this.formData = new FormData()


    // Logout
    new Logout({ document, localStorage, onNavigate })
  }



  handleChangeFile = e => {
    e.preventDefault()
    this.file = this.fileInput.files[0]
    this.mimeType = this.file.type
    
    //Reject if Wrong mimeType
    if (!this.grantedMimeType.includes(this.mimeType)) {
      this.fileInput.value = null
      return
    } 
    
    this.fileName = this.file.name
    this.path = '/public/'
    
    this.formData.append(
      'file', this.file, this.fileName )
      this.formData.append('user', this.email)

    
    for (const pair of this.formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    

    this.store
      .bills()
      .create({
        data: this.formData,
        headers: {
          noContentType: true
        }
      })
      .then(({fileUrl, key}) => {
        console.log(fileUrl)
        this.billId = key
        console.log('this.billId', this.billId)
        this.filePath = fileUrl
        console.log('this.path', this.filePath)
        console.log('this.billId', this.billId)
      }).catch(error => console.error(error))
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log('e.target.querySelector(`input[data-testid="datepicker"]`).value', e.target.querySelector(`input[data-testid="datepicker"]`).value)
    const email = JSON.parse(localStorage.getItem("user")).email
    const bill = {
      email,
      type: e.target.querySelector(`select[data-testid="expense-type"]`).value,
      name:  e.target.querySelector(`input[data-testid="expense-name"]`).value,
      amount: parseInt(e.target.querySelector(`input[data-testid="amount"]`).value),
      date:  e.target.querySelector(`input[data-testid="datepicker"]`).value,
      vat: e.target.querySelector(`input[data-testid="vat"]`).value,
      pct: parseInt(e.target.querySelector(`input[data-testid="pct"]`).value) || 20,
      commentary: e.target.querySelector(`textarea[data-testid="commentary"]`).value,
      fileUrl: this.path,
      fileName: this.fileName,
      status: 'pending'
    }
    this.updateBill(bill)
    this.onNavigate(ROUTES_PATH['Bills'])
  }

  // not need to cover this function by tests
  updateBill = (bill) => {
    if (this.store) {
      this.store
      .bills()
      .update({data: JSON.stringify(bill), selector: this.billId})
      .then(() => {
        this.onNavigate(ROUTES_PATH['Bills'])
      })
      .catch(error => console.error(error))
    }
  }
}