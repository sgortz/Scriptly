import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { currentSpeechId } from '../../atoms.jsx';
import HistoryItem from './HistoryItem.jsx';
import DoughnutChart from '../charts/DoughnutChart.jsx';

const lib = require('../shared/scriptlyShared.js');

function HistoryList(props) {
  const [history, setHistory] = useState([]);
  const [currentId, setCurrentId] = useRecoilState(currentSpeechId);

  const getHistory = () => {
    axios.get(`/speech/${currentId}`)
      .then(res => {
        setHistory(res.data[0].speeches);
      })
      .catch(err => new Error('FAIL!!!!!!'));
  }

  useEffect(() => {
    getHistory();
    }, []);

  // assume that data will be passed down through props in homepage
  const renderList = (arr) => {
    if (!arr) {
      return null;
    }
    return (
      <ul className="speech-version-list">
        {arr.map((item, index) => (
          <HistoryItem
            key={item._id}
            date={item.date}
            body={item.body}
            analysis={item.analysis}
            title={item.title}
          />
        ))}
      </ul>
    );
  };

  const renderHeader = (data) => {
    if (!data) {
      return null;
    }
    const sumVals = lib.sumToneValues(data);
    return (
      <>
      <h5 className="mb-1">{`SpeechHistory`}</h5>
      <small>{'Tone - All Versions'}</small>
      <div className="doughnut-medium ">
        <DoughnutChart
          analysis={sumVals}
          labelsOn={true}
        />
      </div>
      </>
    );
  };

  return (
    <div className="flex-down-container history-list-container">
      {history ? renderHeader(history) : null}
      <hr />
      <div className="speech-version-scroll-list">
        {history ? renderList(history) : null}
      </div>
    </div>
  );
}

export default HistoryList;
