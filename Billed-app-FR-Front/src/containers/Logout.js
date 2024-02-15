import { ROUTES_PATH } from '../constants/routes.js'

export default class Logout {
  constructor({ document, onNavigate, localStorage }) {
    
    $('#layout-disconnect').click(this.handleClick)
  }
  
  handleClick = (e) => {
    e.preventDefault()
   localStorage.clear()
    this.onNavigate(ROUTES_PATH['Login'])
  }
} 