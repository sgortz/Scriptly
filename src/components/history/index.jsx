import React, { useState, useEffect } from 'react';
import HistoryList from './HistoryList.jsx';

function History(props) {
  return (
    <div className="history-container">
      <HistoryList />
    </div>
  );
}

export default History;