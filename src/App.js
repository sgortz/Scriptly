import React, { useState,useEffect } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGoogle } from './auth/Firebase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Landing from './components/Landing/Landing.jsx';
import Homepage from './components/Homepage/homepage.jsx';
import SignIn from './components/SignIn.jsx';
import MeetTeam from './components/Landing/MeetTeam.jsx';
import { monitorAuthState } from './auth/Firebase';

function App() {
  const [page, setPage] = useState('landing')
  const [login, setLogin] = useState(false)

const currentPage = page === 'landing' ? <Landing setLogin={setLogin} login={login}/> : <Homepage />

  // const currentPage = page === 'landing' ? <Landing setLogin={setLogin} login={login}/> : <Homepage />
  return (
    <div className="app-container">
            <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/meet-team" element={<MeetTeam />} />
        </Routes>
      </Router>
        {/* <SignIn setPage={setPage}/>
        <Header />
        {currentPage} */}
    </div>
  );
}

export default App;