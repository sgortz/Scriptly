import React, { useState, useEffect } from "react";
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


  const currentPage = page === 'landing' ? <Landing setLogin={setLogin} login={login} /> : <Homepage />
  return (
    <div className="app-container">

        <SignIn setPage={setPage}/>
        <Header />
        {currentPage}
    </div>
  );
}

export default App;