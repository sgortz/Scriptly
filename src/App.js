import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGoogle } from './auth/Firebase';
import Header from './components/Header.jsx';
import Landing from './components/Landing/Landing.jsx';
import Homepage from './components/Homepage/homepage.jsx';
import SignIn from './components/SignIn';

function App() {
  const [page, setPage] = useState('homepage')
  const [login, setLogin] = useState(false)

  const currentPage = page === 'landing' ? <Landing setLogin={setLogin} login={login}/> : <Homepage />
  return (
    <div className="app-container">
      <div className="header">
        <a className="header-login" onClick={() => setLogin(!login)}>login</a>
      <Header />
      </div>

        <div className="body">
               {login && <SignIn/>}
        {currentPage}
        </div>
        {/* <button type="button" className="btn btn-primary" onClick={signInWithGoogle}>
          This is a bootstrap button
        </button>
        <h2>{localStorage.getItem("name")}</h2>
        <h3>{localStorage.getItem("email")}</h3>
        <h3>{localStorage.getItem("photoURL")}</h3> */}
    </div>
  );
}

export default App;
