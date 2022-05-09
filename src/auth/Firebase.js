// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth, GoogleAuthProvider,
  signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

import { getStorage } from "firebase/storage";
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
console.log('storage', storage)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then(result => {
    const {displayName, email, photoURL} = result.user
    //console.log("can you rad me", displayName, email, photoURL)
    //console.log(result)
    //console.log(auth.currentUser)
    localStorage.setItem('name', displayName)
    localStorage.setItem('email', email)
    //localStorage.setItem('photoURL', photoURL)
  })
  .catch(err => console.log('signInWithGoogle err: ', err))
}

export const signInWithEmail = () => {

}

export const createAccount = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
  } catch(error) {
    consolel.log(error)
  }
}