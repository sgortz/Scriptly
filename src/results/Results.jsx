import React, { useState } from 'react';
import Result1 from './Result1.jsx';
import Result2 from './Result2.jsx';
import Result3 from './Result3.jsx';
import Result4 from './Result4.jsx';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function Results(props) {
  const [resultPage, setResultPage] = useState(1);
  const [wordsCount, setWordsCount] = useState(0);
  const [emotionCount, setEmotionCount] = useState(0);

  const changeResultPage = (direction) => {
    setResultPage(resultPage + direction);
  }

  return(
    <div>
      <Modal show={props.show} size="xl" onClick={e => e.stopPropagation()} onHide={props.onClose} centered className="results-modal">
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
    </div>
  )
}