import React from 'react';

function JoinBanner(props) {
  const { setLogin, login } = props;
  return (
    <div className="join-us-banner">

      <button
        type="submit"
        className="join-now-button"
        onClick={(e) => setLogin(!login)}
      >
        JOIN NOW
      </button>
      <h3>Over 220,000 speeches use Scriptly to improve what’s working and fix what isn’t.</h3>
    </div>
  )
}

export default JoinBanner;