import React, { useState } from 'react';
import ConditionalWindow from './conditionalWindow.jsx';
import { useRecoilState } from 'recoil';
import { pageView } from '../../atoms.jsx';
import FileUploaderModal from "../file-uploader-modal/FileUploaderModal.jsx";
import Results from '../../results/Results.jsx';

const Homepage = () => {

  const [pageValue, setPage] = useRecoilState(pageView);
  const [activeTab, setActiveTab] = useState(1);
  const [showUploader, setShowUploader] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // const submission = () => {
  //   console.log('this should submit current text for analysis')
  // }

  // const upload = () => {
  //   console.log('this should navigate to modal/page for upload')
  // }

  const logout = () => {
    console.log('this should be replaced or linked to firebase logout?')
  }

  const avatar = () => {
    console.log('this should go to some sort of profile page?  Firebase?')
  }

  return (
    <div id="homepage">
      <h1>
        Scriptly Placeholder
        <button onClick={() => logout()}>Logout</button>
        <div style={{
          position: 'absolute',
          borderRadius: '50px',
          height: '50px',
          width: '50px',
          backgroundColor: 'red',
          top: '0%',
          right: '0%'
        }} onClick={avatar()}>AV</div>
      </h1>
      <button onClick={() => { setShowUploader(true) }}>Upload</button>
      <FileUploaderModal onClose={() => setShowUploader(false)} show={showUploader} />

      <button onClick={() => { setShowResults(true) }}>Submit</button>
      <Results show={showResults}  onClose={() => setShowResults(false)}/>
      
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
      <div style={{ height: '50vw', width: '50vw', border: '3px solid black' }}>
        <ConditionalWindow />
      </div>

    </div>
  )
};

export default Homepage;



