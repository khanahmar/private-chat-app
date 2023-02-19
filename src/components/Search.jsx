import React from "react"

const Search = () => {
  return (
    <div className="search">
      <div className="searchFrom">
        <input placeholder="Find a user" type="text" />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1676790408057-b56c464beb0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
