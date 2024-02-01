// Import constants for route paths
import { ROUTES_PATH } from '../constants/routes.js'

// Initialize a global variable to keep track of the previous location
export let PREVIOUS_LOCATION = ''

// Define the Login class
export default class Login {

  // Constructor function to initialize the Login class
  constructor({ document, localStorage, onNavigate, PREVIOUS_LOCATION, store }) {
    this.document = document // Assign the global document object to the class
    this.localStorage = localStorage // Assign the global localStorage object to the class
    this.onNavigate = onNavigate // Assign a navigation function to change routes
    this.PREVIOUS_LOCATION = PREVIOUS_LOCATION // Assign the previous location path
    this.store = store // Assign the store object for backend operations

    // Select the employee login form by its test ID
    const formEmployee = this.document.querySelector(`form[data-testid="form-employee"]`)
    // Attach an event listener to the employee form for the submit event
    formEmployee.addEventListener("submit", this.handleSubmitEmployee)

    // Select the admin login form by its test ID
    const formAdmin = this.document.querySelector(`form[data-testid="form-admin"]`)
    // Attach an event listener to the admin form for the submit event
    formAdmin.addEventListener("submit", this.handleSubmitAdmin)
  }

  // Define the function to handle employee form submission
  handleSubmitEmployee = e => {
    e.preventDefault() // Prevent the default form submission action
    // Construct a user object with the form values
    const user = {
      type: "Employee",
      email: e.target.querySelector(`input[data-testid="employee-email-input"]`).value,
      password: e.target.querySelector(`input[data-testid="employee-password-input"]`).value,
      status: "connected"
    }
    // Store the user object in localStorage
    this.localStorage.setItem("user", JSON.stringify(user))
    // Attempt to log in and handle the promise
    this.login(user)
      .catch((err) => this.createUser(user)) // If login fails, try to create the user
      .then(() => {
        this.onNavigate(ROUTES_PATH['Bills']) // Navigate to the Bills page on success
        this.PREVIOUS_LOCATION = ROUTES_PATH['Bills'] // Update the previous location
        PREVIOUS_LOCATION = this.PREVIOUS_LOCATION // Set the global previous location
        this.document.body.style.backgroundColor = "#fff" // Change the background color
      })
  }

  // Define the function to handle admin form submission
  handleSubmitAdmin = e => {
    e.preventDefault() // Prevent the default form submission action
    // Construct an admin user object with the form values
    const user = {
      type: "Admin",
      email: e.target.querySelector(`input[data-testid="admin-email-input"]`).value,
      password: e.target.querySelector(`input[data-testid="admin-password-input"]`).value,
      status: "connected"
    }  
    
    console.log("Login test de connexion") // Log a message for debugging

    // Store the admin user object in localStorage
    this.localStorage.setItem("user", JSON.stringify(user))
    // Attempt to log in and handle the promise
    this.login(user)
      .catch((err) => this.createUser(user)) // If login fails, try to create the user
      .then(() => {
        this.onNavigate(ROUTES_PATH['Dashboard']) // Navigate to the Dashboard page on success
        this.PREVIOUS_LOCATION = ROUTES_PATH['Dashboard'] // Update the previous location
        PREVIOUS_LOCATION = this.PREVIOUS_LOCATION // Set the global previous location
        document.body.style.backgroundColor = "#fff" // Change the background color
      })
  }

  // Define the login function (not required to be covered by tests)
  login = (user) => {
    if (this.store) {
      return this.store
      .login(JSON.stringify({
        email: user.email,
        password: user.password,
      })).then(({jwt}) => {
        localStorage.setItem('jwt', jwt) // Store the JWT token in localStorage
      })
    } else {
      return null // Return null if no store is provided
    }
  }

  // Define the createUser function (not required to be covered by tests)
  createUser = (user) => {
    if (this.store) {
      return this.store
      .users()
      .create({data:JSON.stringify({
        type: user.type,
        name: user.email.split('@')[0], // Extract the name from the email
        email: user.email,
        password: user.password,
      })})
      .then(() => {
        console.log(`User with ${user.email} is created`) // Log a message for debugging
        return this.login(user) // Attempt to log in the newly created user
      })
    } else {
      return null // Return null if no store is provided
    }
  }
}
