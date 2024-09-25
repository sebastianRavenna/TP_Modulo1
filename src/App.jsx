import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <form className="row g-3">
                
        <div className="col-md-4">
          <label htmlfor="inputFirstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="inputFirstName" />
        </div>
        <div className="col-md-4">
          <label htmlfor="inputLastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="inputLastName" />
        </div>
        
        <div className="col-md-4">
          <label htmlfor="inputCell" className="form-label">Cell Phone</label>
          <input type="number" className="form-control" id="inputCell" />
        </div>

        <div className="col-md-12">
          <label htmlfor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
                
        <div className="col-md-6">
          <label htmlfor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-md-6">
          <label htmlfor="inputPassword4" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </>
  )
}

export default App
