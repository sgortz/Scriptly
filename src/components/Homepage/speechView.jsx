import React from 'react';
const Speech = require('./dummySpeeches.js');

const SpeechView = () => {



  return (
    <div>

      <div>
        {Speech.Speech.map((value, index) => {
          return (
            <div style={{display: 'flex'}}>
              <span style={{border: '3px solid black', width: '40vw'}}>Last Edit</span>
              <span style={{border: '3px solid black', width: '40vw'}}>Title</span>
              <span key={index} style={{border: '3px solid black'}}>{value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpeechView;



