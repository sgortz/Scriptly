import React from 'react';
import { Chart as ChartJS, BarElement, BarController, LinearScale, CategoryScale, Legend, Tooltip, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Modal, Container, Col, Row } from 'react-bootstrap';

export default function Result3({changePage}) {
  ChartJS.register(BarElement, BarController, CategoryScale, LinearScale, Legend, Tooltip, Title);
  const data = {
    labels: ['Positive', 'Negative', 'Joy', 'Anger', 'Trust', 'Neutral'],
    datasets: [
      {
        data: [22, 35, 69, 15, 3, 86],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxis: {
        grid: {
          display: false,
        }
      },
    },
    layout: {
      padding: 20
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Speech emotions weight'
      },
      tooltip: {
        displayColors: false,
      }
    }
  }

  return (<>
    <Modal.Header>
      Emotional analysis 3/4
    </Modal.Header>
    <Modal.Body>
      <Container>
        <Row>
          <Col>
          </Col>
          <Col>
            <div style={{position: 'relative'}}>
              <Bar
                data={data}
                options={options}
                aria-label="Speech Emotions weight"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Container>
        <Row>
          <Col sm={10}>
            <p>{`Out of the words of your speech, are highly correlated to an emotion`}</p>
          </Col>
          <Col>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(-1)}>Previous</button>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(1)}>Next</button>
          </Col>
        </Row>
      </Container>
    </Modal.Footer>
  </>
  )

}