import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from '../SignIn.jsx';
import Carousel from './Carousel.jsx';
import JoinBanner from './JoinBanner.jsx'

function Landing(props) {
const {setLogin, login} = props;
    return (
      <div>

      <div className="landing-page">
        <Carousel />
      </div>
      <JoinBanner login={login} setLogin={setLogin} />
    </div>
    );
}

export default Landing;