import React, { useState } from "react"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { storage } from "../firebase"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase"

const Register = () => {
  const [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].value

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoUrl: downloadURL,
            })
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoUrl: downloadURL,
            })
          })
        }
      )
    } catch (error) {
      setErr(true)
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Talk & Talk</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input placeholder="display name" type="text" />
          <input placeholder="email" type="email" />
          <input placeholder="password" type="password" />
          <input style={{ display: "none" }} type="file" id="file" />{" "}
          <label htmlFor="file">
            <i class="fa-solid fa-image"></i>
            <span> </span>
            Click to chose an avatar
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
