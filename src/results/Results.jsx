import React, { useState } from 'react';
import Result1 from './Result1.jsx';
import Result2 from './Result2.jsx';
import Result3 from './Result3.jsx';
import Result4 from './Result4.jsx';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function Results() {
  const [resultPage, setResultPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [wordsCount, setWordsCount] = useState(0);
  const [emotionCount, setEmotionCount] = useState(0);

  const displayModal = () => {
    setShowModal(true);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const changeResultPage = (direction) => {
    setResultPage(resultPage + direction);
  }

  return(
    <>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={displayModal}>
        Launch demo modal
      </button>
      <Modal size="xl" show={showModal} onHide={hideModal} centered className="results-modal">
        {
          resultPage === 1 ?
          <Result1
            wordsCount={wordsCount}
            emotionCount={emotionCount}
            changePage={changeResultPage}
          /> :
          resultPage === 2 ?
          <Result2
            changePage={changeResultPage}
            emotionResults={['positive', 'negative', 'anger', 'trust', 'joy']}
          /> :
          resultPage === 3 ?
          <Result3 changePage={changeResultPage}/>
          : <Result4 changePage={changeResultPage}/>
        }
      </Modal>
    </>
  )
}