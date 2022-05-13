import React, { useState, useEffect } from 'react';
import { Modal, Container, Col, Row } from 'react-bootstrap';
import './styles.css';
import {
  BsFillEmojiAngryFill,
  BsFillEmojiLaughingFill,
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill,
  BsFillEmojiWinkFill,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
} from 'react-icons/bs';

export default function Result2({ changePage, strongEmotions, emotions, emotionCount }) {
  const [percentages, setPercentages] = useState({});
  const { anger, joy, trust, negative, positive } = emotions;

  useEffect(() => {
    setPercentages({
      anger: Math.abs(Math.floor((anger / emotionCount) * 100)),
      negative: Math.abs(Math.floor((negative / emotionCount) * 100)),
      positive: Math.abs(Math.floor((positive / emotionCount) * 100)),
      joy: Math.abs(Math.floor((joy / emotionCount) * 100)),
      trust: Math.abs(Math.floor((trust / emotionCount) * 100)),
    })
  }, [emotions])


  return (
    <>
      <Modal.Header>
        Tone analysis 2/4
      </Modal.Header>
      <Modal.Body>
        <div className="all-cards-container">

          {/* Fear  */}
          <div className={ strongEmotions.indexOf('anger') !== - 1 ? 'card-wrapper main-tone' : 'card-wrapper'} id="anger" key={Math.random() * 1000}>
            <div className="full-card">
              <div className="front-card">
                <BsFillEmojiAngryFill className="emotion-icon"/>
                <h3>Fearful</h3>
                <p className="score"><BsFillHandThumbsDownFill className="bad-score"/>{percentages.anger}%
                </p>
                <p className="result-text">
                {
                  strongEmotions.indexOf('anger') !== - 1 ?
                    'Careful, your speech mainly conveys a fearful tone!'
                  : percentages.anger >= 13 ?
                    'Careful, your speech still is considerably fearful.'
                  :
                    'Great! Your speech does not lean too much towards ferfulness.'
                }
                </p>
              </div>
              <div className="back-card">
                <p className="result-text">
                <span>💡 Tips:</span>
                {
                  strongEmotions.indexOf('anger') !== - 1 ?
                    ' if you aim at reuniting people or if your speech involves brand or personal image, consider using a softer tone, leaning more towards joy and positivity.'
                  : percentages.anger >= 13 ?
                    ' if you aim at reuniting people or if your speech involves brand or personal image, consider using a softer tone, leaning more towards joy and positivity.'
                  : ' just keep going, you\'re doing great!'
                }
                </p>
              </div>
            </div>
          </div>

          {/* Negative */}
          <div className={ strongEmotions.indexOf('negative') !== - 1 ? 'card-wrapper main-tone' : 'card-wrapper'} id="negative" key={Math.random() * 1000}>
            <div className="full-card">
              <div className="front-card">
                <BsFillEmojiFrownFill className="emotion-icon"/>
                <h3>Negative</h3>
                <p className="score"><BsFillHandThumbsDownFill className="bad-score"/>{percentages.negative}%
                </p>
                <p className="result-text">
                {
                  strongEmotions.indexOf('negative') !== - 1 ?
                    'Careful, your speech mainly conveys a negative tone!'
                  : percentages.negative >= 15 ?
                    'Careful, your speech still is considerably negative.'
                  :
                    'Great! Your speech does not lean too much towards negativity.'
                }
                </p>
              </div>
              <div className="back-card">
                <p className="result-text">
                <span>💡 Tips:</span>
                {
                  strongEmotions.indexOf('negative') !== - 1 ?
                    ' if your speech involves brand or personal image, consider shifting some negative words with more positive ones.'
                  : percentages.negative >= 15 ?
                    ' if your speech involves brand or personal image, consider shifting some negative words with more positive ones.'
                  : ' just keep going, you\'re doing great!'
                }
                </p>
              </div>
            </div>
          </div>

          {/* Positive */}
          <div className={ strongEmotions.indexOf('positive') !== - 1 ? 'card-wrapper main-tone' : 'card-wrapper'} id="positive" key={Math.random() * 1000}>
            <div className="full-card">
              <div className="front-card">
                <BsFillEmojiSmileFill className="emotion-icon"/>
                <h3>Positive</h3>
                <p className="score"><BsFillHandThumbsUpFill className="good-score"/>{percentages.positive}%
                </p>
                <p className="result-text">
                {
                  strongEmotions.indexOf('positive') !== - 1 ?
                    'Great job, your speech mainly conveys a positive tone!'
                  : percentages.positive > 18 ?
                    'Good, your speech still is considerably positive!'
                  :
                    'Consider improving your score to reach about 20% and convey a more positive image.'
                }
                </p>
              </div>
              <div className="back-card">
                <p className="result-text">
                  <span>💡 Tips:</span>
                  {
                  strongEmotions.indexOf('positive') !== - 1 ?
                    ' just keep going, you\'re doing great. To go a step further and be even more convincing, make sure trust also have a high score!'
                  : percentages.positive > 18 ?
                    ' consider shifting neutral words to positive ones to strengthen your speech tonality.'
                  :
                    ' consider making your speech more positive if you want to improuve your personal or brand image.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Joy */}
          <div className={ strongEmotions.indexOf('joy') !== - 1 ? 'card-wrapper main-tone' : 'card-wrapper'} id="joy" key={Math.random() * 1000}>
            <div className="full-card">
              <div className="front-card">
                <BsFillEmojiLaughingFill className="emotion-icon"/>
                <h3>Joyful</h3>
                <p className="score"><BsFillHandThumbsUpFill className="good-score"/>{percentages.joy}%
                </p>
                <p className="result-text">
                {
                  strongEmotions.indexOf('joy') !== - 1 ?
                    'Great job, your speech mainly conveys a joyful tone!'
                  : percentages.joy > 13 ?
                    'Good, your speech still is considerably joyful!'
                  :
                    'If your positive tonality is also low, that is bad news.'
                }
                </p>
              </div>
              <div className="back-card">
                <p className="result-text">
                  <span>💡 Tips:</span>
                  {
                  strongEmotions.indexOf('joy') !== - 1 ?
                    ' just keep going, you\'re doing great!'
                  : percentages.joy > 13 ?
                    ' consider shifting neutral words to positive or joyful ones to strengthen your speech tonality.'
                  :
                    ' consider stressing more your happiness or positivity.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Trust */}
          <div className={ strongEmotions.indexOf('trust') !== - 1 ? 'card-wrapper main-tone' : 'card-wrapper'} id="trust" key={Math.random() * 1000}>
            <div className="full-card">
              <div className="front-card">
                <BsFillEmojiWinkFill className="emotion-icon"/>
                <h3>Trustful</h3>
                <p className="score"><BsFillHandThumbsUpFill className="good-score"/>{percentages.trust}%
                </p>
                <p className="result-text">
                {
                  strongEmotions.indexOf('trust') !== - 1 ?
                    'Great job, your speech mainly conveys a trustful tone!'
                  : percentages.trust > 18 ?
                    'Good, your speech still is considerably trustful!'
                  :
                    'Careful, you may not be convincing enough!'
                }
                </p>
              </div>
              <div className="back-card">
                <p className="result-text">
                  <span>💡 Tips:</span>
                  {
                  strongEmotions.indexOf('trust') !== - 1 ?
                    ' just keep going, you\'re doing great!'
                  : percentages.trust > 18 ?
                    ' try to be slightly more impactful and convincing by adding words related to trust.'
                  :
                    ' consider shifting neutral words to trustful ones to be a lot more impactful!'
                  }
                </p>
              </div>
            </div>
          </div>
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