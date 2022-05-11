import React from 'react';
import {currentSpeechText, pageView, allSpeeches, editedSpeechText, currentSpeechId} from '../../atoms.jsx';
import {useRecoilState} from 'recoil';

const SpeechView = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [pageValue, setPage] = useRecoilState(pageView);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [currentId, setCurrentId] = useRecoilState(currentSpeechId);
  console.log(speechValue, 'this is speechvalue')

  const handleEdit = (index) => {
    setEdited(speechValue[index].speeches[0].body);
    setPage('text');
  }

  const displayHistory = (value) => {
    setCurrentId(value._id)
    setPage('history')
    console.log(currentId, 'this is current id')
  }



  return (
    <div>
      <div>
        {speechValue.map((value, index) => {
          let snippet = value.speeches[0].body.slice(0, 200);
          return (
            <div style={{display: 'flex'}} onClick={() => {displayHistory(value)}}>
              <div style={{border: '3px solid black', width: '40vw'}}>{value.speeches[0].date}</div>
              <div style={{border: '3px solid black', width: '40vw'}}>{value.speeches[0].title}</div>
              <div key={index} style={{border: '3px solid black'}}>{snippet}...</div>
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


