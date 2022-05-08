import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'
import { BiLeftArrowAlt } from 'react-icons/bi'
import './FileUploaderModal.css';

function FileUploaderModal(props) {
  const [fileName, setFileName] = useState('');
  const [files, setFiles] = useState([]);

  const onDrop = acceptedFiles => {
    // Do something with the files
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const uploadFile = (e) => {
    e.preventDefault();
    // axios.get('/endpoint', {data})
  }

  return (
    <div className={`file-uploader-modal ${props.show ? 'file-uploader-modal-show' : ''}`} onClick={props.onClose}>
      <div className="file-uploader-modal-content" onClick={e => e.stopPropagation()}>

        <div className="file-uploader-back-button">
          <BiLeftArrowAlt onClick={props.onClose} />
        </div>
        <div className="file-uploader-area">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p className="file-uploader">Drop the files here ...</p> :
                <p className="file-uploader">Drag and drop some files here</p>
            }
            <p>{fileName}</p>
            <button className="submit-speech-button" onClick={uploadFile}>Submit</button>
          </div>
        </div>
        <div className="results-area">
          <span className="word-analyzed">WORD</span>
        </div>
      </div>
    </div>
  )
}

export default FileUploaderModal;
        // <div className="uploader-modal">
        // </div>