import React, { useState, useEffect } from 'react';
import HistoryItem from './HistoryItem.jsx';
import mockData from './mockData.js';
import DoughnutChart from '../charts/DoughnutChart.jsx';

function HistoryList(props) {
  const { id, title, name, email, speech } = mockData;

  // assume that data will be passed down through props in homepage
  const renderList = (arr) => {
    if (!arr) {
      return null;
    }
    return (
      <ul className="speech-version-list">
        {arr.map((item) => (
          <HistoryItem
            key={item.id}
            date={item.date}
            body={item.body}
            analysis={item.analysis}
          />
        ))}
      </ul>
    );
  };
  return (
    <div className="flex-down-container history-list-container">
      <h5 className="mb-1">{`Speech:  ${title}`}</h5>
      <small>{name}</small>
      <div className="doughnut-medium ">
        <DoughnutChart
          analysis={speech[0].analysis}
          labelsOn={true}
        />
      </div>
      <hr />
      <div className="speech-version-scroll-list">
        {speech ? renderList(speech) : null}
      </div>
    </div>
  );
}

export default HistoryList;
