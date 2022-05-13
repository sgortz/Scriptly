import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentAnalysis, currentAnalysis2 } from './../atoms.jsx';
import Result1 from './Result1.jsx';
import Result2 from './Result2.jsx';
import Result3 from './Result3.jsx';
import Result4 from './Result4.jsx';
import { Modal } from 'react-bootstrap';
import Analyzer from '../Analyzer/Analyzer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


export default function Results(props) {
  const [resultPage, setResultPage] = useState(1);
  const [emotionCount, setEmotionCount] = useState(0);
  const [displayedAnalysis, setDisplayedAnalysis] = useState({});
  const [textEditorAnalysis, setTextEditorAnalysis] = useRecoilState(currentAnalysis);
  const [historyAnalysis, setHistoryAnalysis] = useRecoilState(currentAnalysis2);
  const [strongestEmotions, setStrongestEmotions] = useState([]);
  const [weakestEmotions, setWeakestEmotions] = useState([]);

  useEffect(() => {
    if (textEditorAnalysis.totalCount) {
      setDisplayedAnalysis(textEditorAnalysis);
    } else {
      setDisplayedAnalysis(historyAnalysis);
    }
  }, [textEditorAnalysis, historyAnalysis])

  useEffect(() => {
    let count = 0;
    let strongest = [];
    let weakest = [];
    let biggestNum = -1;

    for (const key in displayedAnalysis) {
      if (key !== 'totalCount') {
        const value = displayedAnalysis[key]
        count += value;

        if (value > biggestNum) {
          weakest.push(strongest);
          strongest = [key];
          biggestNum = value;
        } else if (value === biggestNum) {
          strongest.push(key);
        } else {
          weakest.push(key);
        }
      }
    }

    setEmotionCount(count);
    setStrongestEmotions(strongest);
    setWeakestEmotions(weakest.flat());

  }, [props.show])

  const changeResultPage = (direction) => {
    setResultPage(resultPage + direction);
  }


  return(
    <div onClick={() => setResultPage(1)}>
      <Analyzer/>
      <Modal show={props.show} size="xl" onClick={e => e.stopPropagation()} onHide={props.onClose} centered className="results-modal">
        {
          resultPage === 1 ?
          <Result1
            wordsCount={displayedAnalysis.totalCount}
            emotionCount={emotionCount}
            changePage={changeResultPage}
            neutralCount={displayedAnalysis.totalCount - emotionCount}
          /> :
          resultPage === 2 ?
          <Result2
            changePage={changeResultPage}
            strongEmotions={strongestEmotions}
            emotions={displayedAnalysis}
            emotionCount={emotionCount}
          /> :
          resultPage === 3 ?
          <Result3
            changePage={changeResultPage}
            emotions={displayedAnalysis}
            neutral={displayedAnalysis.totalCount - emotionCount}
          />
          : <Result4
            changePage={changeResultPage}
            emotions={displayedAnalysis}
            emotionCount={emotionCount}
          />
        }
      </Modal>
    </div>
  )
}

