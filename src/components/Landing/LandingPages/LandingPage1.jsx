import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from '../../SignIn.jsx';
import PageImage from '../../../assets/PageImage.jsx'

function LandingPage1() {

    return (
     <div className="landingpage0">
      <div className="page-slogan">
          <h2>
            Get the tone of any speech you create. 
            Instantly.
          </h2>
          <br />
          <p>
            Save. Analyze. Re-edit. All in one organizational space.
          </p>

        </div>

        <div className="page-drawing">
          <PageImage />
        </div>
        </div>
    );
}

export default LandingPage1;
