import React from 'react'

function SignUp() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 shadow rounded bg-light" style={{width: "350px"}}>
        
        <h3 className="text-center mb-4">Sign Up</h3>

        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Full Name
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="nameInput"
            placeholder="Enter full name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input 
            type="email" 
            className="form-control" 
            id="emailInput"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input 
            type="password" 
            className="form-control" 
            id="passwordInput"
            placeholder="Enter password"
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary w-100"
          style={{fontWeight: "bold"}}
        >
          Sign Up
        </button>

      </form>
    </div>
  )
}

export default SignUp
