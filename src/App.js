import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGoogle } from './auth/Firebase';
import Header from './components/Header.jsx'
import Landing from './components/Landing/Landing.jsx'
import FileUploaderModal from "./components/file-uploader-modal/FileUploaderModal.jsx";

function App() {
  const [page, setPage] = useState('landing')
  const [show, setShow] = useState(false)
  const currentPage = page === 'landing' ? <Landing /> : page === 'signin' ? <Signin /> : <Homepage />

  return (
    <div className="app-container">
      <Header />
      {currentPage}
      {/* The code below is to be added to Homepage, instead of App.js */}
      <button onClick={() => setShow(true)}>show modal</button>
      <FileUploaderModal onClose={()=> setShow(false)} show={show}/>
    </div>
  );
}

export default App;
