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
      <div>
        {arr.map((item) => (
          <HistoryItem
            key={item.id}
            date={item.date}
            body={item.body}
            analysis={item.analysis}
          />
        ))}
      </div>
    );
  };
  return (
    <div className="flex-down-container history-list-container">
      <h4>Speech History</h4>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{`Speech Title: ${title}`}</h5>
        <div className="doughnut-medium ">
          <DoughnutChart
            analysis={speech[0].analysis}
            labelsOn={true}
          />
        </div>
        <small>{name}</small>
      </div>
      <div className="scroll-list">
        {speech ? renderList(speech) : null}
      </div>
    </div>
  );
}

export default HistoryList;
