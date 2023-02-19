import React from "react"

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="send" />
      <div className="send">
        <input id="file" type="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <i class="fa-solid fa-image"></i>
          <i class="fa-solid fa-paperclip"></i>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
