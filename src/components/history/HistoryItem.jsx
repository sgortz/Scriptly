import React, { useState, useEffect } from 'react';
import DoughnutChart from '../charts/DoughnutChart.jsx';
import {resultsModal} from '../../atoms.jsx';
import {useRecoilState} from 'recoil';
import Results from '../../results/Results.jsx';

function HistoryItem(props) {
  const { date, body, analysis, title } = props;
  const [showResults, setShowResults] = useRecoilState(resultsModal);
  let bodyPreview = body.slice(0, 150);

  console.log('inside result', showResults);

  const sendResults = (e) => {
     setShowResults(true);
     console.log('insideitem',e);
  }

  return (
    <li className="speech-history-list-item" onClick={(e)=> { sendResults(e) }}>
      <small className="speech-date">{date}</small>
      <div className="speech-preview-chart">
        <p className="speech-preview-body">{`${bodyPreview}...`}</p>
        <div className="doughnut-small">
          <DoughnutChart
            analysis={analysis}
            labelsOn={false}
          />
        </div>
      </div>
    </li>
  );
}

export default HistoryItem;
