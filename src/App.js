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


function App() {
  const [page, setPage] = useState('landing')
  const [showTeam, setShowTeam] = useState(false)
  console.log(localStorage.email)
  
  useEffect(() => {
    if(localStorage.email) {
    setPage('homepage')
  }},[])

  const currentPage = page === 'landing' ? <Landing setPage={setPage}/> : <Homepage />


  return (
    <div className="app-container">

        <Header setPage={setPage} showTeam={showTeam} setShowTeam={setShowTeam}/>
        {showTeam && <MeetTeam/>}
        {currentPage}
    </div>
  );
}

export default App;




