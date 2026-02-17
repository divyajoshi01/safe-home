import React from 'react'

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 shadow rounded bg-light" style={{width: "350px"}}>
        
        <h3 className="text-center mb-4">Login</h3>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3 form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary w-100"
          style={{fontWeight: "bold"}}
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default Login
