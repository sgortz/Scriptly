import React from 'react';
import { Chart as ChartJS, Legend, Tooltip, Title, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Modal, Container, Col, Row } from 'react-bootstrap';
import './styles.css';

export default function Result1({wordsCount, emotionCount, changePage}) {
  ChartJS.register(Legend, Tooltip, Title, ArcElement);

  const data = {
    labels: ['Neutral', 'Emotional'],
    datasets: [{
      data: [43, 57],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
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
      Emotional analysis 1/4
    </Modal.Header>
    <Modal.Body>
      <Container>
        <Row>
          <Col>
            <div className="">
              <span>{wordsCount}</span>
              <br/>
              <p>Words analyzed</p>
            </div>
          </Col>
          <Col>
            <div style={{position: 'relative', width: '80%'}}>
              <Doughnut
                data={data}
                options={options}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer className="results-footer">
      <Container>
        <Row>
          <Col sm={10}>
            <p>{`Out of the ${wordsCount} words of your speech, ${emotionCount} are highly correlated to an emotion`}</p>
          </Col>
          <Col>
            <button type="button" className="btn btn-primary results-btn" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(1)}>Next</button>
          </Col>
        </Row>
      </Container>
    </Modal.Footer>
  </>
  )
}