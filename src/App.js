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

  const currentPage = page === 'landing' ? <Landing /> : page === localStorage.email ? <Signin /> : <Homepage />

    return (
      <>
        <div className="app-container">
          <Header />
          <Landing/>
        </div>
      </>
    );
}

export default App;
