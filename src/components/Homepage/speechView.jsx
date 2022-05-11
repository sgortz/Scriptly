import React from 'react';
<<<<<<< HEAD
import {
  currentSpeechText, pageView,
  allSpeeches, editedSpeechText,
  currentSpeechId, updateTitle} from '../../atoms.jsx';
=======
import {currentSpeechText, pageView, allSpeeches, editedSpeechText, currentSpeechId} from '../../atoms.jsx';
>>>>>>> main
import {useRecoilState} from 'recoil';
import moment from 'moment';

const SpeechView = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [pageValue, setPage] = useRecoilState(pageView);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [currentId, setCurrentId] = useRecoilState(currentSpeechId);
<<<<<<< HEAD
  const [titleValue, setTitle] = useRecoilState(updateTitle);

=======
  console.log(speechValue, 'this is speechvalue')
>>>>>>> main

  const handleEdit = (index) => {
    setEdited(speechValue[index].speeches[0].body);
    setPage('text');
    setCurrentId(speechValue[index]._id)
    setTitle(speechValue[index].title)
    // setCurrentId()
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
<<<<<<< HEAD
            <div style={{display: 'flex'}} >
              <div style={{border: '3px solid black', width: '33vw'}}>{moment(value.speeches[0].date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
              <div style={{border: '3px solid black', width: '33vw'}}>{value.speeches[0].title}</div>
              <div key={index} style={{border: '3px solid black', width: '33vw'}} onClick={() => {displayHistory(value)}}>{snippet}...</div>
=======
            <div style={{display: 'flex'}} onClick={() => {displayHistory(value)}}>
              <div style={{border: '3px solid black', width: '40vw'}}>{value.speeches[0].date}</div>
              <div style={{border: '3px solid black', width: '40vw'}}>{value.speeches[0].title}</div>
              <div key={index} style={{border: '3px solid black'}}>{snippet}...</div>
>>>>>>> main
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


