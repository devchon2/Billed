import { ROUTES_PATH } from '../constants/routes.js'
import Logout from "./Logout.js"

export default class NewBill {
  constructor({ document, onNavigate, store, localStorage }) {
    this.document = document
    this.onNavigate = onNavigate
    this.store = store
    
    this.formNewBill = this.document.querySelector(`form[data-testid="form-new-bill"]`)
    this.formNewBill.addEventListener("submit", this.handleSubmit.bind(this))
    
    this.fileInput = this.document.querySelector(`input[data-testid="file"]`)
    this.fileInput.addEventListener("change", this.handleChangeFile.bind(this))
    this.fileName = null
    this.billId = null
    this.path = null
    this.grantedMimeType = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
    
    new Logout({ document, localStorage, onNavigate })

    this.fileButton = this.formNewBill.querySelector(`input#file`)
    this.submitButton = this.formNewBill.querySelector(`button#btn-send-bill`)
    this.document.addEventListener('change', () => {
      this.checkInputs([ this.formNewBill.querySelector(`select[data-testid="expense-type"]`), this.formNewBill.querySelector(`input[data-testid="expense-name"]`), this.formNewBill.querySelector(`input[data-testid="amount"]`), this.formNewBill.querySelector(`input[data-testid="datepicker"]`), this.formNewBill.querySelector(`input[data-testid="vat"]`), this.formNewBill.querySelector(`input[data-testid="pct"]`), this.formNewBill.querySelector(`textarea[data-testid="commentary"]`)])
    })
  }


  
  checkInputs = (arrayFromFormElements) => {
    const enableValidate = arrayFromFormElements.every(e => e.value !== '' && e.value !== null)
    console.log('enableValidate', enableValidate)
    
      this.fileButton.disabled = !enableValidate
      console.log('this.file.Button', this.fileButton.disabled)
      if (this.fileButton.files[0] !== undefined) {
        this.submitButton.disabled = !enableValidate
      }
    }


  handleChangeFile = e => {
    e.preventDefault()

    

    this.file  = this.fileInput.files[0]
    console.log('file', this.file)
    this.mimetype = this.file.type
    console.log('mimetype', this.mimetype)
    this.filePath = this.fileInput.value.split(/(\\|\/)/g)

    if (!this.grantedMimeType.includes(this.mimetype)) {
      this.fileInput.value = null
      this.file = null
      alert('Mauvais format de fichier! \n Seuls les fichiers .jpg, .jpeg, .png et .gif sont acceptés')
      return
    } 
    
    
    
    this.fileName = this.file.name
    const expanseType = this.formNewBill.querySelector(`select[data-testid="expense-type"]`).value
    const expenseName = this.formNewBill.querySelector(`input[data-testid="expense-name"]`).value ?
            this.formNewBill.querySelector(`input[data-testid="expense-name"]`).value : 
                  expanseType
    const amount = parseInt(this.formNewBill.querySelector(`input[data-testid="amount"]`).value) || 0
    const date = this.formNewBill.querySelector(`input[data-testid="datepicker"]`).value
    const vat = this.formNewBill.querySelector(`input[data-testid="vat"]`).value.toString() || 0
    const pct = parseInt(this.formNewBill.querySelector(`input[data-testid="pct"]`).value) || 20
    const commentary = this.formNewBill.querySelector(`textarea[data-testid="commentary"]`).value


    const formData = new FormData()
    const email = JSON.parse(localStorage.getItem("user")).email
    formData.append('file',this.file,this.fileName)
    formData.append('filePath', this.path + this.fileName)
    formData.append('email', email),
    formData.append('type', expanseType	),
    formData.append('name', expenseName),
    formData.append('amount', amount),
    formData.append('date', date),
    formData.append('vat', vat),
    formData.append('pct', pct)
    formData.append('commentary', commentary)
    formData.append('status', 'pending')
    
    
    console.log(' this.path',  this.path)
    console.log(' this.file',  this.file)
    console.log(' this.fileName',  this.fileName)
    console.log(' expanseType',  expanseType)
    console.log(' expenseName',  expenseName)
    console.log(' amount',  amount)
    console.log(' date',  date)
    console.log(' vat',  vat)
    console.log(' pct',  pct)
    console.log(' commentary',  commentary)



    

    this.store
      .bills()
      .create({
        data: formData,
        headers: {
          noContentType:true
        }
      })
      .then(({filePath, key,id }) => {
        debugger
        this.billId = id,
        this.filePath = `${filePath.split('\\').join('/')}${key}` 
      }).catch(error => console.error(error))
  }
  handleSubmit = e => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem("user"))
    const email = user.email
    const formData = new FormData()
    formData.append('email', email)
    const bill = {

      email: email,
      id: this.billId,
      type: e.target.querySelector(`select[data-testid="expense-type"]`).value,
      name:  e.target.querySelector(`input[data-testid="expense-name"]`).value,
      amount: parseInt(e.target.querySelector(`input[data-testid="amount"]`).value),
      date:  e.target.querySelector(`input[data-testid="datepicker"]`).value,
      vat: e.target.querySelector(`input[data-testid="vat"]`).value.toString() || 0,
      pct: parseInt(e.target.querySelector(`input[data-testid="pct"]`).value) || 20,
      commentary: e.target.querySelector(`textarea[data-testid="commentary"]`).value,
      path: this.path  + this.fileName,
      fileName: this.fileName,
      status: 'pending'
    }
    formData.append('data', JSON.stringify(bill))
    formData.append('user', JSON.stringify(user))
    

    this.updateBill(formData)
    this.onNavigate(ROUTES_PATH['Bills'])
  }

  // not need to cover this function by tests
  updateBill = (bill) => {
    if (this.store) {
      this.store
      .bills()
      .update({data: bill,headers:{
        noContentType:true,
        
      },params: {id: bill.billId}, selector: bill.billId})
      .then(() => {
        this.onNavigate(ROUTES_PATH['Bills'])
      })
      .catch(error => console.error(error))
    }
  }
}