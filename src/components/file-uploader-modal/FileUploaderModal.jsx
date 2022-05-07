import React from 'react';
import './FileUploaderModal.css';

function FileUploaderModal() {
  return (
    <div className="file-uploader-page">
      <a href="#"> Back</a>
      <div className="aqua-card">

      <div className="uploader-modal">
        <span className="file-uploader">FILE UPLOADER</span>
        <button className="submit-speech">SUBMIT</button>
      </div>
      <div className="results-area">
        <span className="word-analyzed">WORD</span>
      </div>
      </div>
    </div>
  )
}

export default FileUploaderModal;