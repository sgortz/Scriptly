import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGoogle } from './auth/Firebase';

import Header from './components/Header.jsx'
import Landing from './components/Landing/Landing.jsx'
import SignUp from './components/SignUp'



function App () {
  const [page, setPage] = useState('landing')
  const [login, setLogin] = useState(false)
  console.log(login)
  const currentPage = page === 'landing' ? <Landing /> : page === 'signin' ? <Signin /> : <Homepage />
    return (
      <>
      <div className="app-container">
      <Header />
      <a onClick={() => setLogin(true)}>Log-in</a>
      {login && (<SignUp />)}

        <Header />
        {currentPage}
        <Homepage/>
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
>>>>>>> main
    );
}

export default App;
