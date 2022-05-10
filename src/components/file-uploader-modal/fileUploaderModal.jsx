import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'
import { BiLeftArrowAlt } from 'react-icons/bi'
import './FileUploaderModal.css';
import {useRecoilState} from 'recoil';
import {uploadModal} from '../../atoms.jsx';

function FileUploaderModal(props) {
  const [fileName, setFileName] = useState('');
<<<<<<< HEAD
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
    // accept: {
    //   'text/*': [],
    //   'video/*': []
    // },
    onDrop:(acceptedFiles) => {
      console.log('acceptedFiles', acceptedFiles)
      setFiles(acceptedFiles);
    }
  })
  
=======
  const [files, setFiles] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function(e) {
        setFiles([e.target.result]);
      };
      reader.readAsText(file);
      console.log(file)
      return file;
    });
  }, []);

   const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({onDrop});

>>>>>>> main
  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const uploadFile = (e) => {
    e.preventDefault();
    // axios.get('/speech', {data})
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