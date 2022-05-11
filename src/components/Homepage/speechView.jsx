import React from 'react';
import {
  currentSpeechText, pageView,
  allSpeeches, editedSpeechText,
  currentSpeechId, updateTitle,
  editBoolean} from '../../atoms.jsx';
import {useRecoilState} from 'recoil';
import moment from 'moment';

const SpeechView = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [pageValue, setPage] = useRecoilState(pageView);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [currentId, setCurrentId] = useRecoilState(currentSpeechId);
  const [titleValue, setTitle] = useRecoilState(updateTitle);
  const [editBooleanValue, setEditBoolean] = useRecoilState(editBoolean);


  const handleEdit = (index) => {
    setEdited(speechValue[index].speeches[0].body);
    setCurrent(speechValue[index].speeches[0].body);
    setEditBoolean(true)
    setPage('text');
    setCurrentId(speechValue[index]._id)
    setTitle(speechValue[index].title)
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
            <div style={{display: 'flex'}} >
              <div style={{border: '3px solid black', width: '33vw'}}>{moment(value.speeches[0].date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
              <div style={{border: '3px solid black', width: '33vw'}}>{value.speeches[0].title}</div>
              <div key={index} style={{border: '3px solid black', width: '33vw'}} onClick={() => {displayHistory(value)}}>{snippet}...</div>
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


