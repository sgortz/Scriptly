import React, { useState } from 'react';
import Result1 from './Result1.jsx';
import Result3 from './Result3.jsx';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Results() {
  const [resultPage, setResultPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const displayModal = () => {
    setShowModal(true);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const changeResultPage = (direction) => {
    setResultPage(resultPage + direction);
  }

  return(<>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={displayModal}>
      Launch demo modal
    </button>
    <Modal show={showModal} size="lg" onHide={hideModal}>
      <Modal.Header>Emotional analysis</Modal.Header>
      <Modal.Body>
        {
          resultPage === 1 ? <Result1/> : <Result3/>
        }
      </Modal.Body>
      <Modal.Footer>
        { resultPage > 1 ?
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changeResultPage(-1)}>Previous</button>
          : null
        }
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changeResultPage(1)}>Next</button>
      </Modal.Footer>
    </Modal>
    </>
  )
}