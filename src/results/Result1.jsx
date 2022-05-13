import React from 'react';
import { Chart as ChartJS, Legend, Tooltip, Title, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Modal } from 'react-bootstrap';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import './styles.css';

export default function Result1({ wordsCount, emotionCount, changePage, neutralCount }) {
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

      <div className="btn btn-primary results-btn" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(1)}><BsFillCaretRightFill/></div>
    </Modal.Footer>
  </>
  )
}