import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGoogle } from './auth/Firebase';
import Header from './components/Header.jsx';
import Landing from './components/Landing/Landing.jsx';
import Homepage from './components/Homepage/homepage.jsx';
import SignIn from './components/SignIn';

function App() {
  const [page, setPage] = useState('landing')
  const [login, setLogin] = useState(false)

  const currentPage = page === 'landing' ? <Landing /> : page === 'signin' ? <Signin /> : <Homepage />

  return (
    <div className="app-container">
      <Header />
      <a onClick={() => setLogin(!login)}>Log-in</a>

        {login && <SignIn/>}
        {currentPage}
        <Homepage />
<<<<<<< HEAD

=======
      {/* The code below is to be added to Homepage, instead of App.js */}
      {/* <button onClick={() => setShow(true)}>show modal</button> */}
      {/* <FileUploaderModal onClose={() => setShow(false)} show={show} /> */}
      {/* <h1>
          Hello {name}
        </h1>
>>>>>>> main

        <button type="button" className="btn btn-primary" onClick={signInWithGoogle}>
          This is a bootstrap button
        </button>
        <h2>{localStorage.getItem("name")}</h2>
        <h3>{localStorage.getItem("email")}</h3>
        <h3>{localStorage.getItem("photoURL")}</h3> */}
    </div>
  );
}

export default App;
