import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBXJ1LCvd356jtXaTR62-ZedOHvdVQKHwI",
  authDomain: "udemy-modern-javascript-2b7b3.firebaseapp.com",
  projectId: "udemy-modern-javascript-2b7b3",
  storageBucket: "udemy-modern-javascript-2b7b3.appspot.com",
  messagingSenderId: "298457992123",
  appId: "1:298457992123:web:8d266bcc91091cad06129e",
  measurementId: "G-BQLK58MWEW",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage()
export const db = getFirestore(app)
