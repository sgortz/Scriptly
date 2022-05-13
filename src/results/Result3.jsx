import React from 'react';
import { Chart as ChartJS, BarElement, BarController, LinearScale, CategoryScale, Legend, Tooltip, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Modal, Container, Col, Row } from 'react-bootstrap';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

export default function Result3({ changePage, emotions, neutral }) {
  ChartJS.register(BarElement, BarController, CategoryScale, LinearScale, Legend, Tooltip, Title);
  const { positive, negative, joy, anger, trust } = emotions;
  const data = {
    labels: ['Positive', 'Negative', 'Joy', 'Fear', 'Trust'],
    datasets: [
      {
        data: [positive, negative, joy, anger, trust],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(153, 102, 255, 0.2)',
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
        text: 'Tones weight'
      },
      tooltip: {
        displayColors: false,
      }
    }
  }

  return (<>
    <Modal.Header>
    Tone analysis 3/4
    </Modal.Header>
    <Modal.Body>
      <div style={{position: 'relative', width: '70%', margin:'0 auto' }}>
        <Bar
          data={data}
          options={options}
          aria-label="Speech Tone weight"
        />
      </div>
    </Modal.Body>
    <Modal.Footer className="results-footer">
    <div className="btn btn-primary results-btn" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(-1)}><BsFillCaretLeftFill/></div>

    {/* <p>{`Out of the ${wordsCount} words of your speech, ${emotionCount} have a strong tonality`}</p> */}

    <div className="btn btn-primary results-btn" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(1)}><BsFillCaretRightFill/></div>
    </Modal.Footer>
  </>
  )

}