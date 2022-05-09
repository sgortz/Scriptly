import React, { useState, useEffect } from 'react';
import DoughnutChart from '../charts/DoughnutChart.jsx';

function HistoryItem(props) {
  const { date, body, analysis } = props;

  return (
    <div className="list-item">
      <div>{date}</div>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{`${body.slice(0, 150)}...`}</h5>
        <div className="doughnut-small">
          <DoughnutChart
            analysis={analysis}
            labelsOn={false}
          />
        </div>
      </div>
    </div>
  );
}

export default HistoryItem;
