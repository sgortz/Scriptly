import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, Legend, Tooltip, Title, ArcElement } from 'chart.js';
import { useRecoilState } from 'recoil';
import { Doughnut } from 'react-chartjs-2';
import { Modal } from 'react-bootstrap';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import './styles.css';
import axios from 'axios';
import { editedSpeechText, updateTitle, currentSpeechId, editBoolean, pageView, allSpeeches, resultsModal, formattedSpeech } from './../atoms.jsx';

export default function Result1({ wordsCount, emotionCount, changePage, neutralCount, emotions }) {
  const [noStrongTonality, setNoStrongTonality] = useState(false);

  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [titleValue, setTitle] = useRecoilState(updateTitle);
  const [currentId, setCurrentId] = useRecoilState(currentSpeechId);
  const [editBooleanValue, setEditBoolean] = useRecoilState(editBoolean);
  const [pageValue, setPage] = useRecoilState(pageView);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [showResults, setShowResults] = useRecoilState(resultsModal);
  const [formattedValue, setFormatted] = useRecoilState(formattedSpeech);

  useEffect(() => {
    if (!emotionCount) {
      setNoStrongTonality(true);
    } else {
      setNoStrongTonality(false);
    }
  }, [emotionCount]);

  const handleSubmit = () => {
    let url = '';
    setShowResults(false);

    if (!editBooleanValue) {
      url = `/speech/`
    } else if (editBooleanValue) {
      url = `/speech/${currentId}`
    } else {
      return 'Invalid submit';
    }

    axios.post(url, {
      body: `${formattedValue}`,
      title: `${titleValue}`,
      name: 'Trevor Edwards',
      email: `${localStorage.email}`,
      totalCount: emotions.totalCount,
      positive: emotions.positive,
      negative: emotions.negative,
      trust: emotions.trust,
      anger: emotions.anger,
      joy: emotions.joy,
    })
    .then((response) => {
      axios.get(`/history/${localStorage.email}`)
      .then((res) => {
        setSpeechValue(res.data);
        setPage('speech');
        setEditBoolean(false);
        setEdited('      ');
        setTitle('');
      })
      .catch((error) => {
        console.log('error')
      })
    })
    .catch((error) => {
      console.error(error, 'this is a post error')
    })
  }

  ChartJS.register(Legend, Tooltip, Title, ArcElement);

  const data = {
    labels: ['Neutral', 'Strong tonality'],
    datasets: [{
      data: [neutralCount, emotionCount],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ]
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    },
    layout: {
      padding: 20
    }
  }

  return(<>
    <Modal.Header>
      Tone analysis 1/4
    </Modal.Header>
    <Modal.Body>
      <div className="result1-container">
        <div className="words-analyzed">
          <p className="word-count">{wordsCount}</p>
          <pre>
            -----------------
              Words analyzed
            -----------------
          </pre>
          {/* <p>Words analyzed</p> */}
        </div>
        <div style={{position: 'relative', width: '35%'}}>
          <Doughnut
            data={data}
            options={options}
          />
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer className="results-footer">
      <div></div>

      <p>{`Out of the ${wordsCount} words of your speech, ${emotionCount} have a strong tonality`}</p>

      { noStrongTonality ?
        <button type="button" className="btn btn-primary submit-speech" data-toggle="modal" data-target="#exampleModal" onClick={handleSubmit}>Submit</button>
        :
        <div className="btn btn-primary results-btn" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(1)}><BsFillCaretRightFill/></div>
      }
    </Modal.Footer>
  </>
  )
}