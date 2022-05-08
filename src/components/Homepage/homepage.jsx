import React from 'react';
import ConditionalWindow from './conditionalWindow.jsx';
import {useRecoilState} from 'recoil';
import {pageView} from '../../atoms.jsx';

const Homepage = () => {

  const [pageValue, setPage] = useRecoilState(pageView);

  const submission = () => {
    console.log('this should submit current text for analysis')
  }

  const upload = () => {
    console.log('this should navigate to modal/page for upload')
  }


  return (
    <div>
      <h1>
        Scriptly Placeholder
      </h1>
      <button onClick={() => {upload()}}>Upload</button>
      <button onClick={() => {submission()}}>Submit</button>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Speeches</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Text Editor</a>
        </li>
      </ul>
      <div style={{height: '50vw', width: '50vw', border: '3px solid black'}}>
        <ConditionalWindow/>
      </div>

    </div>
  )
};

export default Homepage;



