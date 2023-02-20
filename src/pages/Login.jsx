import React from "react"
import img from "../imglogo.png"

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Talk & Talk</span>
        <span className="title">Login</span>
        <form>
          <input placeholder="email" type="email" />
          <input placeholder="password" type="password" />
          <button>Sign up</button>
        </form>
        <p>You do have an account? Register</p>
      </div>
    </div>
  )
}

export default Register
