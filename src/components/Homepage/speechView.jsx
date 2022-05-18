import React, {useState} from 'react';
import {
  currentSpeechText, pageView,
  allSpeeches, editedSpeechText,
  currentSpeechId, updateTitle,
  editBoolean, reverser} from '../../atoms.jsx';
import {useRecoilState, useRecoilValue} from 'recoil';
import moment from 'moment';
import {SpeechDiv} from './styles.js';
import { GiQuillInk } from "react-icons/gi"
import { Toast } from 'react-bootstrap';



const SpeechView = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [pageValue, setPage] = useRecoilState(pageView);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [currentId, setCurrentId] = useRecoilState(currentSpeechId);
  const [titleValue, setTitle] = useRecoilState(updateTitle);
  const [editBooleanValue, setEditBoolean] = useRecoilState(editBoolean);
  const reversed = useRecoilValue(reverser)

  const [toggleValue, setToggle] = useState(false);
  const [xValue, setX] = useState(0);
  const [yValue, setY] = useState(0);

  const handleEdit = (index) => {
    setEdited(reversed[index].speeches[0].body);
    setCurrent(reversed[index].speeches[0].body);
    setEditBoolean(true);
    setPage('text');
    setCurrentId(reversed[index]._id);
    setTitle(reversed[index].title);
  }

  const displayHistory = (value) =>{
    setCurrentId(value._id);
    setPage('history');
  }

  const onHover = (event) => {
    let xOffset = event.screenX + 100;
    let yOffset = event.screenY + 100;
    setX(xOffset);
    setY(yOffset);
    setToggle(true);
  }

  const onLeave = () => {
    setToggle(false)
  }

  return (
    <div>
      <div>
        {reversed.map((value, index) => {
          let snippet = value.speeches[0].body.slice(0, 200);
          return (
            <div style={{display: 'flex'}} >

              <SpeechDiv

                key={Math.random()}
                style={{width: '10vw'}}
                >{moment(value.speeches[0].date).format("dddd, MMMM Do YYYY")}
                </SpeechDiv>

              <SpeechDiv
                key={Math.random()}
                style={{width: '20vw', textAlign: 'center', justifyContent: 'center'}}>{value.speeches[0].title}
                </SpeechDiv>

              <SpeechDiv
                key={Math.random()}
                style={{width: '70vw'}}
                onClick={() => {displayHistory(value)}}
                onMouseOver={() => {
                  onHover(event);
                }}
                onMouseLeave={() => {
                  onLeave();
                }}
                >{snippet}...
              </SpeechDiv>

              <GiQuillInk key={Math.random()} style={{
                height: '3vw', width: '3vw', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexDirection: 'column'}} onClick={() => {
                handleEdit(index)
              }}>Edit</GiQuillInk>
            </div>
          )
        })}
      </div>
      <Toast style={{
        width: '15vw',
        position: 'absolute',
        left: `${xValue}px`,
        top: `${yValue}px`}}
        onClose={() => setToggle(false)}
        show={toggleValue}
        delay={2000} autohide>
        <Toast.Header>
          <strong className="me-auto">Scriptly Notification</strong>
        </Toast.Header>
        <Toast.Body>Click for complete version history</Toast.Body>
      </Toast>
    </div>
  )
}

export default SpeechView;



