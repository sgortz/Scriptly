// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, onAuthStateChanged,signInWithPopup, createUserWithEmailAndPassword,signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { loginStatus,showLoginModal, loginText } from '../atoms.jsx'
import { useRecoilState } from 'recoil'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBUXJ1CUG0xbnzFH5DkMtFSQI-ha2YW0I",
  authDomain: "scriptly-dcd67.firebaseapp.com",
  projectId: "scriptly-dcd67",
  storageBucket: "scriptly-dcd67.appspot.com",
  messagingSenderId: "375366431036",
  appId: "1:375366431036:web:06e50c45682ae8ee8dae39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
const provider = new GoogleAuthProvider()




export const signInWithGoogle = () => {
  // const [login, setLogin] = useRecoilState(loginStatus)
  // const [text, setLoginText] = useRecoilState(loginText)

  signInWithPopup(auth, provider)
  .then(result => {
    const {displayName, email, photoURL} = result.user
    //console.log("can you rad me", displayName, email, photoURL)
    //console.log(result)
    //console.log(auth.currentUser)
    //localStorage.setItem('name', displayName)
    // setLogin(true)
    // setLoginText("log out")
    localStorage.setItem('email', email)
    //localStorage.setItem('photoURL', photoURL)
  })
  .catch(err => console.log('signInWithGoogle err: ', err))
}

export const signInWithEmail = (email,password) => {
  const [login, setLogin] = useRecoilState(loginStatus)
  const [text, setLoginText] = useRecoilState(loginText)
  try {
    const userCredential = signInWithEmailAndPassword(auth,email,password);
    setLogin(true)
    setLoginText("log out")

  } catch(error) {
    console.log(error)
  }
}

export const createAccount = (email, password) => {
  try {
    const userCredential = createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
  } catch(error) {
    consolel.log(error)
  }
}
export const monitorAuthState = () => {
  const [login, setLogin] = useRecoilState(loginStatus)
  const [text, setLoginText] = useRecoilState(loginText)

  onAuthStateChanged(auth,user => {
    if(user) {
      console.log("logged in",user)
      setLogin(true)
      setLoginText("log out")
    } else {
      localStorage.clear();
      console.log('logged out')
      setLogin(false)
      setLoginText("log in")
    }
  })
}
export const logOut = () => {
  signOut(auth)
  monitorAuthState()
}
