import React from 'react';
import {currentSpeechText, pageView, allSpeeches, editedSpeechText} from '../../atoms.jsx';
import {useRecoilState} from 'recoil';

const SpeechView = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [pageValue, setPage] = useRecoilState(pageView);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  // console.log(speechValue, 'this is speechvalue')

  const handleEdit = (index) => {
    setEdited(speechValue[index].speeches[0].body);
    setPage('text');
  }

  const displayHistory = () => {
    // console.log('go to history modal')
  }

  return (
    <div>
      <div>
        {speechValue.map((value, index) => {
          let snippet = value.speeches[0].body.slice(0, 200);
          return (
            <div style={{display: 'flex'}} onClick={displayHistory}>
              <span style={{border: '3px solid black', width: '40vw'}}>{value.speeches[0].date}</span>
              <span style={{border: '3px solid black', width: '40vw'}}>{value.speeches[0].title}</span>
              <span key={index} style={{border: '3px solid black'}}>{snippet}...</span>
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


