import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import ConditionalWindow from './conditionalWindow.jsx';
import {
  pageView, allSpeeches, editedSpeechText,
  updateTitle, resultsModal, currentSpeechText,
  currentAnalysis, currentSpeechId,
} from '../../atoms.jsx';
import FileUploaderModal from "../file-uploader-modal/FileUploaderModal.jsx";
import Results from '../../results/Results.jsx';
import Thinking from './thinking.jsx';
import SignIn from '../SignIn.jsx';

const Homepage = (props) => {

  useEffect(() => {
    getSpeeches();
  }, [pageValue]);

  const [activeTab, setActiveTab] = useState(1);
  const [showUploader, setShowUploader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [pageValue, setPage] = useRecoilState(pageView);
  const [showResults, setShowResults] = useRecoilState(resultsModal);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [titleValue, setTitle] = useRecoilState(updateTitle);
  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [analysisValue, setAnalysis] = useRecoilState(currentAnalysis);
  const [currentId, setCurrentId] = useRecoilState(currentSpeechId);



  const email = localStorage.email; // replace with live email

  const getSpeeches = () => {
    console.log('this should rerender my speeches')
    const email = localStorage.email;

    axios.get(`/history/${email}`)
      .then((response) => {
        setSpeechValue(response.data)
      })
      .catch((error) => {
        console.log('error')
      })
  }

  const handleAnalyze = () => {
    if (editedValue.length > 0 && titleValue.length > 0) {
      axios.post(`/speech/${currentId}`, {
        body: `${editedValue}`,
        title: `${titleValue}`,
        name: 'Trevor Edwards',
        email: `${email}`,
        totalCount: analysisValue.totalCount,
        positive: analysisValue.positive,
        negative: analysisValue.negative,
        trust: analysisValue.trust,
        anger: analysisValue.anger,
        joy: analysisValue.joy,
      })
        .then((response) => {
          console.log('this is a post success')
        })
        .catch((error) => {
          console.log(error, 'this is a post error')
        })
    } else {
      alert('Invalid Entry - Title and Body Must Exist')
    }
    setShowResults(true)
  }

  const handleSubmit = () => {
    if (editedValue.length > 0 && titleValue.length > 0) {
      axios.post(`/speech/`, {
        body: `${editedValue}`,
        title: `${titleValue}`,
        name: 'Trevor Edwards',
        email: `${email}`,
        totalCount: analysisValue.totalCount,
        positive: analysisValue.positive,
        negative: analysisValue.negative,
        trust: analysisValue.trust,
        anger: analysisValue.anger,
        joy: analysisValue.joy,
      })
        .then((response) => {
          console.log('this is a post success')
        })
        .catch((error) => {
          console.log(error, 'this is a post error')
        })
    } else {
      alert('Invalid Entry - Title and Body Must Exist')
    }
  }

  return (
    <div id="homepage">
      {/* <Thinking/> */}
      <SignIn setPage={props.setPage} />
      <button onClick={() => { setShowUploader(true) }}>Upload</button>
      <FileUploaderModal onClose={e => setShowUploader(false)} show={showUploader} />

      <button onClick={() => { handleAnalyze() }}>Analyze</button>
      <Results show={showResults} onClose={e => setShowResults(false)} />

      <button onClick={() => { handleSubmit() }}>Submit</button>

      <ul className="nav nav-tabs mb-3" id="myTab0" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={activeTab === 1 ? "nav-link active" : "nav-link"}
            id="home-tab0"
            data-mdb-toggle="tab"
            data-mdb-target="#home0"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={() => { setPage('speech'); setActiveTab(1); }}
          >
            Speeches
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={activeTab === 2 ? "nav-link active" : "nav-link"}
            id="profile-tab0"
            data-mdb-toggle="tab"
            data-mdb-target="#profile0"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            onClick={() => { setPage('text'); setActiveTab(2); }}
          >
            Text Editor
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={activeTab === 3 ? "nav-link active" : "nav-link"}
            id="home-tab0"
            data-mdb-toggle="tab"
            data-mdb-target="#home0"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={() => { setPage('history'); setActiveTab(3); }}
          >
            History
          </button>
        </li>
      </ul>
      <div style={{ height: '80vw', width: '90vw', border: '3px solid black', overflow: 'auto' }}>
        <ConditionalWindow />
      </div>
    </div>
  )
}

export default Homepage;
