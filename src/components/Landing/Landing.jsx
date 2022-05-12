import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import PageImage from '../../assets/PageImage.jsx';
import JoinBanner from './JoinBanner.jsx';

function Landing(props) {
  const { setLogin, login } = props;
  return (
    <div>

      <div className="landing-page">
        <div className="page-slogan">
          <h2>
            Get the tone of any speech you create. Instantly.
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
      <JoinBanner login={login} setLogin={setLogin} />
    </div>
  );
}

export default Landing;
