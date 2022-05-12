import React, {useState, useEffect} from 'react';
import ConditionalWindow from './conditionalWindow.jsx';
import {useRecoilState} from 'recoil';
import {
  pageView, allSpeeches, editedSpeechText,
  updateTitle, resultsModal, currentSpeechText,
  currentAnalysis, currentSpeechId} from '../../atoms.jsx';
import axios from 'axios';
import FileUploaderModal from "../file-uploader-modal/FileUploaderModal.jsx";
import Results from '../../results/Results.jsx';
import SignIn from '../SignIn.jsx';
import Thinking from './thinking.jsx';

const Homepage = (props) => {

  useEffect(() => {
    getSpeeches();
    if (pageValue === 'speech') {
      return setActiveTab(1);
    }
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
      setShowResults(true);
    }
  }

  return (
    <div id="homepage">
      {/* <Thinking/> */}
      <SignIn setPage={props.setPage}/>
      <button onClick={() => { setShowUploader(true) }}>Upload</button>
      <FileUploaderModal onClose={e => setShowUploader(false)} show={showUploader} />

      <button onClick={() => { handleAnalyze() }}>Analyze</button>
      <Results show={showResults}  onClose={e => setShowResults(false)}/>

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




