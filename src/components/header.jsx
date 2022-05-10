import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiQuillInk } from "react-icons/gi"
import SignIn from './SignIn'

function Header () {


  return (
    <>
      <SignIn/>
      <div className="header"><GiQuillInk /> Scriptly </div>
    </>
  );
}

export default Header;