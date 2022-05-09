import React, { useState } from 'react';
import Result1 from './Result1.jsx';
import Result3 from './Result3.jsx';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Results(props) {
  const [resultPage, setResultPage] = useState(1);

  const changeResultPage = (direction) => {
    setResultPage(resultPage + direction);
  }

  return (
    <div>
      <Modal show={props.show} size="lg" onClick={e => e.stopPropagation()} onHide={props.onClose} >
        <Modal.Header>Emotional analysis</Modal.Header>
        <Modal.Body>
          {
            resultPage === 1 ? <Result1 /> : <Result3 />
          }
        </Modal.Body>
        <Modal.Footer>
          {resultPage > 1 ?
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changeResultPage(-1)}>Previous</button>
            : null
          }
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changeResultPage(1)}>Next</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}