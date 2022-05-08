import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGoogle } from './auth/Firebase';
import Header from './components/Header.jsx'
import Landing from './components/Landing/Landing.jsx'

function App () {
  const [page, setPage] = useState('landing')
  const currentPage = page === 'landing' ? <Landing /> : page === 'signin' ? <Signin /> : <Homepage />

    return (
      <div className="app-container">
      <Header />
      {currentPage}
      </div>
    );
}

export default App;
