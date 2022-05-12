import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import PageImage from '../../assets/PageImage.jsx';

function Landing(props) {
  const { setLogin, login } = props;
  return (
    <div className="landing-page">
      <div className="page-slogan">
        <h2>
          Get the tone of any speech you create. Instantly.
        </h2>
        <br />
        <p>
          Over 220,000 speeches use Scriptly to improve what’s working and fix what isn’t.
        </p>
        <button
          type="submit"
          className="start-here-button"
          onClick={() => setLogin(!login)}
        >
          Get Started
        </button>
      </div>
      <div className="page-drawing">
        <PageImage />
      </div>
    </div>
  );
}

export default Landing;
