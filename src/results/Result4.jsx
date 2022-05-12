import React from 'react';
import { Chart as ChartJS, ArcElement, Legend, Tooltip, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Modal, Container, Col, Row } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { editedSpeechText, updateTitle, currentSpeechId, editBoolean, pageView, allSpeeches, resultsModal, formattedSpeech } from './../atoms.jsx';
import axios from 'axios';

export default function Result4({ changePage, emotions, wordsCount }) {
  const { positive, negative, joy, anger, trust, neutral } = emotions;

  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [titleValue, setTitle] = useRecoilState(updateTitle);
  const [currentId, setCurrentId] = useRecoilState(currentSpeechId);
  const [editBooleanValue, setEditBoolean] = useRecoilState(editBoolean);
  const [pageValue, setPage] = useRecoilState(pageView);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [showResults, setShowResults] = useRecoilState(resultsModal);
  const [formattedValue, setFormatted] = useRecoilState(formattedSpeech);


  ChartJS.register(ArcElement, Legend, Tooltip, Title);

  const dataChart1 = {
    labels: ['Positive', 'Negative'],
    datasets: [
      {
        data: [positive, negative],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
      },
    ],
  };

  const dataChart2 = {
    labels: ['Joy', 'Fear'],
    datasets: [
      {
        data: [joy, anger],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltip: {
        displayColors: false,
      }
    }
  }

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


  return (<>
    <Modal.Header>
    Tone analysis 4/4
    </Modal.Header>
    <Modal.Body>
      <Container>
        <Row>
          <Col>
            <div style={{position: 'relative'}}>
              <h3>Positive vs Negative</h3>
              <Doughnut
                data={dataChart1}
                options={options}
                aria-label="Positive vs Negative Emotions weight"
              />
            </div>
          </Col>
          <Col>
            <div style={{position: 'relative'}}>
              <h3>Joy vs Fear</h3>
              <Doughnut
                data={dataChart2}
                options={options}
                aria-label="Positive vs Negative Emotions weight"
              />
            </div>
          </Col>
          <Col>
            <div style={{position: 'relative'}}>
              <h3>Trust</h3>
              <span>{ trust / wordsCount }%</span>
            </div>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer className="results-footer">
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(-1)}>Previous</button>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={handleSubmit}>Submit</button>
    </Modal.Footer>
  </>
  )

}