import React, {useState, useEffect} from 'react';
import ConditionalWindow from './conditionalWindow.jsx';
import {useRecoilState} from 'recoil';
import {pageView, allSpeeches, editedSpeechText} from '../../atoms.jsx';
import axios from 'axios';
import FileUploaderModal from "../file-uploader-modal/FileUploaderModal.jsx";
import Results from '../../results/Results.jsx';

const Homepage = () => {

  useEffect(() => {
    getSpeeches();
    }, []);

  const [pageValue, setPage] = useRecoilState(pageView);
  const [activeTab, setActiveTab] = useState(1);
  const [showUploader, setShowUploader] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);


  const email = 'hello@gmail.com';

  const getSpeeches = () => {
    axios.get(`/history/${email}`)
    .then((response) => {
      setSpeechValue(response.data)
    })
    .catch((error) => {
      console.log('error')
    })
  }


  const testingSubmission = () => {
    console.log(editedValue, 'this is in axios post', typeof(editedValue))
    axios.post('/speech', {body: `${editedValue}`, name: 'Jonathan Will Atwood Sr.', email: 'hello@gmail.com'})
    .then((response) => {
      console.log('this is a post success')
    })
    .catch((error) => {
      console.log(error, 'this is a post error')
    })
  }



  return (
    <div>

      <button onClick={() => { setShowUploader(true) }}>Upload</button>
      <FileUploaderModal onClose={e => setShowUploader(false)} show={showUploader} />

      <button onClick={() => { setShowResults(true) }}>Submit</button>
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
      </ul>
      <div style={{ height: '50vw', width: '50vw', border: '3px solid black' }}>
        <ConditionalWindow />
      </div>
      <button onClick={() => {
          testingSubmission()
        }}>Post</button>
    </div>
  )
}

export default Homepage;



