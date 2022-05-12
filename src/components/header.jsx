import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiQuillInk } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './Landing/Landing.css';
import SignIn from './SignIn.jsx';

function Header() {
  return (
    <div className="header row">
      <div className="main-title col-3">
        <Link to="/">
          <GiQuillInk />
          <h1>Scriptly</h1>
        </Link>
      </div>
      <div className="header-menu col">
        <span className="about-us">
          <a href="https://github.com/SteveOceanProject" target="_blank" rel="noreferrer">About Us</a>
        </span>
        <Link to="/meet-team" className="team-page">Meet the Team</Link>
        <span className="pricing">Pricing</span>
        <span className="about-us">
          <a href="https://github.com/SteveOceanProject" target="_blank" rel="noreferrer">Contact Us</a>
        </span>
        <span className="login-page">
          <button className="login-button" type="button">LOGIN</button>
          {/* <SignIn /> */}
        </span>
      </div>
    </div>
  );
}

export default Header;
