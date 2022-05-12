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
            <div className="card-content-container">
              <BsFillEmojiAngryFill className="emotion-icon"/>
              <h3>Fearful</h3>
            </div>
          </div>

          {/* Negative */}
          <div className={ strongEmotions.indexOf('negative') !== - 1 ? 'card-wrapper main-tone' : 'card-wrapper'} id="negative" key={Math.random() * 1000}>
            <div className="card-content-container">
              <BsFillEmojiFrownFill className="emotion-icon"/>
              <h3>Negative</h3>
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
                <BsFillEmojiSmileFill className="emotion-icon"/>
                <h3>Positive</h3>
                <p className="result-text">
                  <span>💡 Tips:</span> if you aim at convincing and reuniting your audience, consider slightly improving your Trustful tone score.
                </p>
              </div>
            </div>
          </div>

          {/* Joy */}
          <div className={ strongEmotions.indexOf('joy') !== - 1 ? 'card-wrapper main-tone' : 'card-wrapper'} id="joy" key={Math.random() * 1000}>
            <div className="card-content-container">
              <BsFillEmojiLaughingFill className="emotion-icon"/>
              <h3>Joyful</h3>
            </div>
          </div>

          {/* Trust */}
          <div className={ strongEmotions.indexOf('trust') !== - 1 ? 'card-wrapper main-tone' : 'card-wrapper'} id="trust" key={Math.random() * 1000}>
            <div className="card-content-container">
              <BsFillEmojiWinkFill className="emotion-icon"/>
              <h3>Trustful</h3>
            </div>
          </div>
          {/* {mainEmotions}
          {otherEmotions} */}
        </div>
      </Modal.Body>
      <Modal.Footer className="results-footer">
        <p>{`Your speech mainly convey a ${strongEmotions[0]} tone.`}</p>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(-1)}>Previous</button>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(1)}>Next</button>
      </Modal.Footer>
    </>
  )

}