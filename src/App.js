/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing/Landing.jsx';
import Homepage from './components/Homepage/homepage.jsx';
import Header from './components/header.jsx';
import { monitorAuthState } from './auth/Firebase';

const which = () => {
  return localStorage.email ? 'homepage' : 'landing';
}


function App() {
  const [page, setPage] = useState(which());
  const [login, setLogin] = useState(false);

  const currentPage = page === 'landing' ? <Landing setLogin={setLogin} login={login} setPage={setPage} page={page} /> : <Homepage setPage={setPage} page={page} />;
  return (
    <div className="app-container">
      <Header />
      {/* <SignIn/>
        <Homepage /> */}
      {currentPage}
    </div>
  );
}

export default App;
