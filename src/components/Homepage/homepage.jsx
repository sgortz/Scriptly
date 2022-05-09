import React, {useState, useEffect} from 'react';
import ConditionalWindow from './conditionalWindow.jsx';
import {useRecoilState} from 'recoil';
import {pageView, resultModal, uploadModal, allSpeeches, editedSpeechText} from '../../atoms.jsx';
import axios from 'axios';

const Homepage = () => {

  useEffect(() => {
    getSpeeches();
    }, []);

  const [pageValue, setPage] = useRecoilState(pageView);
  const [showModal, setShowModal] = useState(false);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);


  const email = 'hello@gmail.com'

  const getSpeeches = () => {
    axios.get(`/history/${email}`)
    .then((response) => {
      console.log('this is a post success')
    })
    .catch((error) => {
      console.log('error')
    })
  }

  const submission = () => {
    console.log(showResultModal)
    setResultModal(true)
  }

  const testingSubmission = () => {
    axios.post('/speech', {body: {editedValue}, name: 'Jonathan Will Atwood Sr.', email: 'hello@gmail.com'})
    .then((response) => {
      console.log('this is a post success')
    })
    .catch((error) => {
      console.log(error, 'this is a post error')
    })
  }



  return (
    <div>
      <h1>
        Scriptly Placeholder

      </h1>
      <button onClick={() => {
          upload()
        }}>Upload</button>
      <button onClick={() => {
          submission()
        }}>Submit</button>

      <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab0"
            data-mdb-toggle="tab"
            data-mdb-target="#home0"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={() => {setPage('speech')}}
          >
          Speeches
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab0"
            data-mdb-toggle="tab"
            data-mdb-target="#profile0"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            onClick={() => {setPage('text')}}
          >
            Text Editor
          </button>
        </li>
      </ul>
      <div style={{height: '50vw', width: '50vw', border: '3px solid black'}}>
        <ConditionalWindow/>
      </div>
      <button onClick={() => {
          testingSubmission()
        }}>Post</button>
    </div>
  )
};

export default Homepage;



