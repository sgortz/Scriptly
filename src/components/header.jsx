import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiQuillInk } from "react-icons/gi"
import SignIn from './SignIn'
import { loginStatus,showLoginModal, loginText } from '../atoms.jsx'
import { useRecoilState } from 'recoil'


function Header () {
  const [login, setLogin] = useRecoilState(loginStatus)
  const [loginModal, setLoginModal] = useRecoilState(showLoginModal)
  const [text, setLoginText] = useRecoilState(loginText)


  return (
    <>
      <a onClick={()=>{setLoginModal(true)}}>{text}</a>
      {(loginModal) && <SignIn/>}
      <div className="header"><GiQuillInk /> Scriptly </div>

    </>
  );
}

export default Header;