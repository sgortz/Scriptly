import React, { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { editedSpeechText, resultsModal, updateTitle } from '../../atoms.jsx';
import { useDropzone } from 'react-dropzone'
import { BiLeftArrowAlt } from 'react-icons/bi'
import './FileUploaderModal.css';

function FileUploaderModal(props) {

  const [fileName, setFileName] = useState('');
  const [files, setFiles] = useState(null);
  const [enableButton, setEnableButton] = useState(true);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [showResults, setShowResults] = useRecoilState(resultsModal);
  const [page, setPage] = useState(1);
  const [titleValue, setTitle] = useRecoilState(updateTitle);

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setFiles([e.target.result]);
      };
      reader.readAsText(file);
      return file;
    });
  }, []);

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({ onDrop });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li className="uploaded-file-info" key={file.path}>
      <p><strong>Title: </strong>{titleValue}</p>
      <p><strong>Filename: </strong>{file.path}</p>
      <p><strong>File size: </strong>{file.size} bytes</p>
    </li>
  ));

  const uploadFile = (e) => {
    e.preventDefault();
    // sending to speech analysis
    setEdited(files[0])
    // send the info to results' modal
    setShowResults(true);
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
            value={titleValue}
            onChange={
              e => {
                setTitle(e.target.value);
                setEnableButton(false);
              }} />
          {titleValue.length === 0 ? <div className="form-text">Please add a title to your speech before submitting.</div> : null}
          <ul style={{ listStyle: 'none', marginTop: '2em', padding: 0 }}>{acceptedFileItems}</ul>
          <button className="submit-speech-button" onClick={uploadFile} disabled={enableButton}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default FileUploaderModal;