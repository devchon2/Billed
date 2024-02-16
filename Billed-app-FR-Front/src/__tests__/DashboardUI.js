import DashboardUI from '../views/DashboardUI.js'
import {bills} from '../fixtures/bills.js'
import { screen } from '@testing-library/dom'

describe('given the dashboardpage not loaded', () => {
  test('then it should  not render dashboard page and is in loading state', () => {
    
    const html = DashboardUI({ data: bills, loading: true })
    document.body.innerHTML = html
    expect(screen.getByText('Loading...')).toBeTruthy()
  }),
  test('then it should not render dashboard page and is in error', () => {
    
    const html = DashboardUI({ data: bills, error: 'Erreur' })
    document.body.innerHTML = html
    expect(screen.getByTestId('error-message')).toBeTruthy()
  })
})

  describe('given the dashboardpage is loaded', () => {
    test('then it should render dashboard page', () => {
      
      const html = DashboardUI({ data: bills, loading: false })
      document.body.innerHTML = html
      expect(screen.getAllByTestId('dashboard-content')).toBeTruthy()
    })})