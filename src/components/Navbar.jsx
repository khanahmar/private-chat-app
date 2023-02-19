import React from "react"

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Talk & Talk</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1676790408057-b56c464beb0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <span>Jane</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
