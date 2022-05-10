import React, { useState, useEffect } from 'react';
import DoughnutChart from '../charts/DoughnutChart.jsx';


function HistoryItem(props) {
  const { date, body, analysis } = props;
  let bodyPreview = body.slice(0, 150);

  return (
    <li className="speech-history-list-item">
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
