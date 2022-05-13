import React, { useState, useEffect } from 'react';
import DoughnutChart from '../charts/DoughnutChart.jsx';
import {resultsModal, currentAnalysis2} from '../../atoms.jsx';
import {useRecoilState} from 'recoil';
import Results from '../../results/Results.jsx';
import moment from 'moment';

function HistoryItem(props) {
  const { date, body, analysis, title } = props;
  const [showResults, setShowResults] = useRecoilState(resultsModal);
  const [currentAnalysis, setAnalysis] = useRecoilState(currentAnalysis2);

  let bodyPreview = body.slice(0, 400);

  const sendResults = (e) => {
    e.preventDefault();
    setShowResults(true);
    setAnalysis(analysis);
    console.log(analysis, 'this is the analysis on click')
    console.log('This should be currentAnalysis',currentAnalysis);
  }

  return (
    <div className="speech-list-item" onClick={(e)=> { sendResults(e) }}>
      <div className="speech-list-body">
        <small className="speech-date">{moment(date).format("dddd, MMMM Do YYYY")}</small>
        <div className="speech-preview-chart">
          <p className="speech-preview-body">{`${bodyPreview}...`}</p>
          <div className="doughnut-small">
            <DoughnutChart
              analysis={analysis}
              labelsOn={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryItem;
