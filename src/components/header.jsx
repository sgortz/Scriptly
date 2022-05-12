import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiQuillInk } from 'react-icons/gi';
import './Landing/Landing.css';
import SignIn from './SignIn.js';

function Header() {
  return (
    <div className="header row">
      <h1 className="main-title col-7">
        <GiQuillInk />
        Scriptly
      </h1>
      <div className="header-menu col">
        <span className="about-us">
          <a href="https://github.com/SteveOceanProject" target="_blank" rel="noreferrer">About Us</a>
        </span>
        <span className="team-page">Team</span>
        <span className="login-page">
          <SignIn />
        </span>
      </div>
      {/* <script>login</script> */}
    </div>
  );
}

export default Header;
