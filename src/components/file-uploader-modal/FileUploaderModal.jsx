import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'
import { BiLeftArrowAlt } from 'react-icons/bi'
import './FileUploaderModal.css';
const lib = require('../shared/ScriptlyShared.js');

function FileUploaderModal(props) {
  const [fileName, setFileName] = useState('');
  const [files, setFiles] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function(e) {
        setFiles([e.target.result]);
      };
      reader.readAsText(file);
      return file;
    });
  }, []);

   const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({onDrop});

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const uploadFile = (e) => {
    e.preventDefault();
    let words = lib.parseTextToArray(files[0]);
    let totalWordCount = words.length;
    // analysis here

    // need users email, speech title,
   // axios.post(/speech)


    alert('thank you for submitting')
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
                <p className="file-uploader">Drop the files here</p> :
                <p className="file-uploader">Drag and drop here or click to add some files </p>
            }
            <p>{fileName}</p>
          </div>
            <input type="text" name="title" placeholder="Enter speech title"/>
            <button className="submit-speech-button" onClick={uploadFile}>Submit</button>
          <ul>{acceptedFileItems}</ul>
        </div>
        {/* <div className="results-area">
          <span className="word-analyzed">WORD</span>
        </div> */}
      </div>
    </div>
  )
}

export default FileUploaderModal;