import React from 'react';
import './FileUploaderModal.css';

function FileUploaderModal() {
  return (
    <div className="file-uploader-modal">
      <div className="file-uploader-back-button">
        <a href="#"> Back</a>
      </div>
      <div className="file-uploader-modal-content">
        <span className="file-uploader">FILE UPLOADER</span>
        <button className="submit-speech-button">SUBMIT</button>
      </div>
      <div className="results-area">
        <span className="word-analyzed">WORD</span>
      </div>
    </div>
  )
}

export default FileUploaderModal;
        // <div className="uploader-modal">
        // </div>