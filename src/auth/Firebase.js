import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, onAuthStateChanged,signInWithPopup, createUserWithEmailAndPassword,signOut, signInWithEmailAndPassword } from "firebase/auth";

import { getStorage } from "firebase/storage";
import "core-js/stable";
import "regenerator-runtime/runtime";

const firebaseConfig = {
  apiKey: "AIzaSyDBUXJ1CUG0xbnzFH5DkMtFSQI-ha2YW0I",
  authDomain: "scriptly-dcd67.firebaseapp.com",
  projectId: "scriptly-dcd67",
  storageBucket: "scriptly-dcd67.appspot.com",
  messagingSenderId: "375366431036",
  appId: "1:375366431036:web:06e50c45682ae8ee8dae39"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
  .then(result => {
    const {displayName, email, photoURL} = result.user
    localStorage.setItem('email', email)
  })
  .catch(err =>{
    localStorage.clear();
    alert(err.code)
  })
}

export const signInWithEmail = async (email,password) => {
  await signInWithEmailAndPassword(auth,email,password)
  .then(result => {
    const {displayName, email, photoURL} = result.user
    localStorage.setItem('email', email)
  })
  .catch(err =>{
    localStorage.clear();
    alert(err.code)
  })
  localStorage.setItem('email', email)
}

export const createAccount = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then(result => {
      const {displayName, email, photoURL} = result.user
      localStorage.setItem('email', email)
    }).catch(err => {
      localStorage.clear();
      if(err.code==='auth/email-already-in-use') alert("email is already taken")
      else alert(err.code)
    });

}

export const monitorAuthState = () => {
  let result = false
  onAuthStateChanged(auth,user => {
    if(user) {
       result = true
    } else {
      localStorage.clear();
      result = false
    }
  })
  return result
}

export const logOut = () => {
  signOut(auth)
  monitorAuthState()
}
