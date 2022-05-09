import React, { useState,useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGoogle, logOut } from './auth/Firebase';
import Homepage from './components/Homepage/homepage.jsx'
import Header from './components/Header.jsx'
import Landing from './components/Landing/Landing.jsx'
import SignIn from './components/SignIn'
import { loginStatus } from './atoms.jsx'
import { useRecoilState} from 'recoil'

function App () {
  const [page, setPage] = useState('landing')
  const [login, setLogin] = useRecoilState(loginStatus)

  const currentPage = page === 'landing' ? <Landing /> : page === 'signin' ? <Signin /> : <Homepage />
    return (
      <>
      <div className="app-container">
      <Header />
      <Landing/>
      {/* {!loginStatus ? <a onClick={()=>{setLogin(true)}}>log in/sign up</a> : <a onClick={()=>{setLogin(false)}}>log out</a>}
        {(!loginStatus) && <SignIn/>} */}
        {/* <Homepage/> */}
        {/* <h1>
          Hello {name}
        </h1>

        <button type="button" className="btn btn-primary" onClick={signInWithGoogle}>
          This is a bootstrap button
        </button>
        <h2>{localStorage.getItem("name")}</h2>
        <h3>{localStorage.getItem("email")}</h3>
        <h3>{localStorage.getItem("photoURL")}</h3> */}
        </div>
      </>
    );
}

export default App;
