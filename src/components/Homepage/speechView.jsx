import React from 'react';
import {currentSpeechText, pageView} from '../../atoms.jsx';
import {useRecoilState} from 'recoil';


const Speech = require('./dummySpeeches.js');

const SpeechView = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [pageValue, setPage] = useRecoilState(pageView);

  const handleEdit = (index) => {
    setCurrent(Speech.Speech[index])
    setPage('text')
  }

  return (
    <div>
      <div>
        {Speech.Speech.map((value, index) => {
          return (
            <div style={{display: 'flex'}}>
              <span style={{border: '3px solid black', width: '10vw'}}>Last Edit</span>
              <span style={{border: '3px solid black', width: '10vw'}}>Title</span>
              <span key={index} style={{border: '3px solid black'}}>{value}</span>
              <button onClick={() => {
                handleEdit(index)
              }}>Edit</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpeechView;



