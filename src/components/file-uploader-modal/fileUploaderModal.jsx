import React, { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { currentSpeechText } from '../../atoms.jsx';
import { useDropzone } from 'react-dropzone'
import { BiLeftArrowAlt } from 'react-icons/bi'
import './FileUploaderModal.css';
const lib = require('../shared/ScriptlyShared.js');
// import Analyzer from '../../Analyzer/speechAnalyzer.js';
import Analyzer from '../../Analyzer/Analyzer.jsx'

function FileUploaderModal(props) {
  const [fileName, setFileName] = useState('');
  const [files, setFiles] = useState(null);
  const [speechTitle, setSpeechTitle] = useState('');
  const [enableButton, setEnableButton] = useState(true);
  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setFiles([e.target.result]);
      };
      reader.readAsText(file);
      // console.log(file)
      return file;
    });
  }, []);

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({ onDrop });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li className="uploaded-file-info" key={file.path}>
      <p><strong>Title: </strong>{speechTitle}</p>
      <p><strong>Filename: </strong>{file.path}</p>
      <p><strong>File size: </strong>{file.size} bytes</p>
    </li>
  ));

  const uploadFile = (e) => {
    e.preventDefault();

    let words = lib.parseTextToArray(files[0]);

    // sending to speech analysis
    let speechAnalizer = Analyzer(files[0]);

    // send the info to Amina's modal 
      // need users email, speech title, emotions obj

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
                <p className="file-uploader">Drag and drop or click here to add some files </p>
            }
            <p>{fileName}</p>
          </div>
          <input type="text"
            className="form-control speech-title-input"
            name="title"
            placeholder="Enter speech title"
            value={speechTitle}
            onChange={
              e => {
                setSpeechTitle(e.target.value);
                setEnableButton(false);
              }} />
          {speechTitle.length === 0 ? <div className="form-text">Please add a title to your speech before submitting.</div> : null}
          <ul style={{ listStyle: 'none', marginTop: '2em', padding: 0 }}>{acceptedFileItems}</ul>
          <button className="submit-speech-button" onClick={uploadFile} disabled={enableButton}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default FileUploaderModal;