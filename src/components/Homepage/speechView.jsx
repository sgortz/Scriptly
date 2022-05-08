import React from 'react';
const Speech = require('./dummySpeeches.js');

const SpeechView = () => {



  return (
    <div>
      Speech
      <div>
        {Speech.Speech.map((value, index) => {
          return (
            <div key={index}>{value}</div>
          )
        })}
      </div>
    </div>
  )
}

export default SpeechView;



