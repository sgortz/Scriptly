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

export default function Result2({ changePage, strongEmotions, emotions }) {
  // const [showReco, setShowReco] = useState(false);

  const handleHover = () => {
    setShowReco(true);
  }

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
                <p className="score"><BsFillHandThumbsDownFill className="bad-score"/>{emotions.angry}
                </p>
                <p className="result-text">
                  Great job, your speech mainly conveys a positive tone!
                </p>
              </div>
              <div className="back-card">
                <p className="result-text">
                  <span>💡 Tips:</span> if you aim at convincing and reuniting your audience, consider slightly improving your Trustful tone score.
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
                <p className="score"><BsFillHandThumbsDownFill className="bad-score"/>{emotions.negative}
                </p>
                <p className="result-text">
                  Great job, your speech mainly conveys a positive tone!
                </p>
              </div>
              <div className="back-card">
                <p className="result-text">
                  <span>💡 Tips:</span> if you aim at convincing and reuniting your audience, consider slightly improving your Trustful tone score.
                </p>
              </div>
            </div>
          </div>

{/* { strongEmotions.indexOf('positive') !== - 1 && strongEmotions.indexOf('trust') === - 1 ? */}


          {/* Positive */}
          <div className={ strongEmotions.indexOf('positive') !== - 1 ? 'card-wrapper main-tone' : 'card-wrapper'} id="positive" key={Math.random() * 1000}>
            <div className="full-card">
              <div className="front-card">
                <BsFillEmojiSmileFill className="emotion-icon"/>
                <h3>Positive</h3>
                <p className="score"><BsFillHandThumbsUpFill className="good-score"/>{emotions.positive}
                </p>
                <p className="result-text">
                  Great job, your speech mainly conveys a positive tone!
                </p>
              </div>
              <div className="back-card">
                <p className="result-text">
                  <span>💡 Tips:</span> if you aim at convincing and reuniting your audience, consider slightly improving your Trustful tone score.
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
                <p className="score"><BsFillHandThumbsUpFill className="good-score"/>{emotions.joy}
                </p>
                <p className="result-text">
                  Great job, your speech mainly conveys a joyful tone!
                </p>
              </div>
              <div className="back-card">
                <p className="result-text">
                  <span>💡 Tips:</span> if you aim at convincing and reuniting your audience, consider slightly improving your Trustful tone score.
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
                <p className="score"><BsFillHandThumbsUpFill className="good-score"/>{emotions.joy}
                </p>
                <p className="result-text">
                  Great job, your speech mainly conveys a joyful tone!
                </p>
              </div>
              <div className="back-card">
                <p className="result-text">
                  <span>💡 Tips:</span> if you aim at convincing and reuniting your audience, consider slightly improving your Trustful tone score.
                </p>
              </div>
            </div>
          </div>
          {/* {mainEmotions}
          {otherEmotions} */}
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