import React from "react"
import img from "../imglogo.png"

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Talk & Talk</span>
        <span className="title">Register</span>
        <form>
          <input placeholder="display name" type="text" />
          <input placeholder="email" type="email" />
          <input placeholder="password" type="password" />
          <input
            style={{
              display: "none",
              cursor: "pointer",
            }}
            type="file"
          />
          <label
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            htmlFor="file"
            id="file"
          >
            <i class="fa-solid fa-image"></i>
            
            Add an avatart
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
