import React from 'react';
import SignIn from '../SignIn.jsx';

function JoinBanner({ setPage }) {

  return (
    <div className="join-us-banner">
      <SignIn setPage={setPage} cName={'join-now-button'} text={'JOIN NOW'} />
      <h3>Over 220,000 speeches use Scriptly to improve what’s working and fix what isn’t.</h3>
    </div>
  )
}

export default JoinBanner;