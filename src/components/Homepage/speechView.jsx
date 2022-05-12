import React from 'react';
import {
  currentSpeechText, pageView,
  allSpeeches, editedSpeechText,
  currentSpeechId, updateTitle,
  editBoolean, reverser} from '../../atoms.jsx';
import {useRecoilState, useRecoilValue} from 'recoil';
import moment from 'moment';
import styled from 'styled-components';
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import { GiQuillInk } from "react-icons/gi"


const SpeechView = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [pageValue, setPage] = useRecoilState(pageView);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [currentId, setCurrentId] = useRecoilState(currentSpeechId);
  const [titleValue, setTitle] = useRecoilState(updateTitle);
  const [editBooleanValue, setEditBoolean] = useRecoilState(editBoolean);
  const reversed = useRecoilValue(reverser)


  const handleEdit = (index) => {
    console.log(index)
    setEdited(reversed[index].speeches[0].body);
    setCurrent(reversed[index].speeches[0].body);
    setEditBoolean(true)
    setPage('text');
    setCurrentId(reversed[index]._id)
    setTitle(reversed[index].title)
  }

  const displayHistory = (value) =>{
    setCurrentId(value._id)
    setPage('history')
  }
  return (
    <div>
      <div>
        {reversed.map((value, index) => {
          let snippet = value.speeches[0].body.slice(0, 200);
          return (
            <div style={{display: 'flex'}} >
              <SpeechDiv key={Math.random()} style={{width: '10vw'}}>{moment(value.speeches[0].date).format("dddd, MMMM Do YYYY")}</SpeechDiv>
              <SpeechDiv key={Math.random()} style={{width: '20vw', textAlign: 'center', justifyContent: 'center'}}>{value.speeches[0].title}</SpeechDiv>
              <SpeechDiv key={Math.random()} style={{width: '70vw'}} onClick={() => {displayHistory(value)}}>{snippet}...
                <ViewHistory>View Version History{'     '}
                  <BsFillCalendarCheckFill style={{height: '2vw', width: '2vw', }}/>
                </ViewHistory>
              </SpeechDiv>
              <GiQuillInk style={{
                height: '3vw', width: '3vw', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexDirection: 'column'}} onClick={() => {
                handleEdit(index)
              }}>Edit</GiQuillInk>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpeechView;

const SpeechDiv = styled.div`
  font-weight: bold;
  background: rgb(143,190,197);
  background: linear-gradient(85deg, rgba(143,190,197,1) 0%, rgba(168,231,241,0.8883928571428571) 23%, rgba(255,255,255,1) 75%);
  border-bottom: 2px solid black;
  padding: 1vw;
`
const ViewHistory = styled.div`
  background: rgb(122,125,121);
  background: linear-gradient(85deg, rgba(122,125,121,0.6783088235294117) 0%, rgba(204,209,203,0.6418942577030813) 16%, rgba(255,255,255,0.9920343137254902) 50%);
`