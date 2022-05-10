import React, { useState, useEffect } from 'react';
import { Modal, Container, Col, Row } from 'react-bootstrap';
import './styles.css';
import {
  BsFillEmojiAngryFill,
  BsFillEmojiLaughingFill,
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill ,
  BsFillEmojiWinkFill
} from 'react-icons/bs';

export default function Result2({changePage, emotionResults}) {
  const [mainEmotion, setMainEmotion] = useState('');
  const [emotionsDisplayed, setEmotionDisplayed] = useState(0);

  useEffect(() => {
    setMainEmotion(emotionResults[0]);
  }, [emotionResults])

  const allEmojis = {
    anger:
      <BsFillEmojiAngryFill className="emotion-icon"/> ,
    joy:
      <BsFillEmojiLaughingFill className="emotion-icon"/> ,
    trust:
      <BsFillEmojiWinkFill className="emotion-icon"/> ,
    negative:
      <BsFillEmojiFrownFill className="emotion-icon"/> ,
    positive:
    <BsFillEmojiSmileFill className="emotion-icon"/>
  };


  return(
    <>
      <Modal.Header>
        Emotional analysis 2/4
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <div className="result2-card">
                {allEmojis[emotionResults[1]]}
                <h3>{emotionResults[1]}</h3>
              </div>
            </Col>
            <Col>
              <div className="result2-card">
                {allEmojis[emotionResults[2]]}
                <h3>{emotionResults[2]}</h3>
              </div>
            </Col>
            <Col sm={3}>
              <div className="result2-card biggest-card">
                {allEmojis[emotionResults[0]]}
                <h3>{emotionResults[0]}</h3>
              </div>
            </Col>
            <Col>
              <div className="result2-card">
                {allEmojis[emotionResults[3]]}
                <h3>{emotionResults[3]}</h3>
              </div>
            </Col>
            <Col>
              <div className="result2-card">
                {allEmojis[emotionResults[4]]}
                <h3>{emotionResults[4]}</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="results-footer">
        <p>{`Out of the words of your speech, are highly correlated to an emotion`}</p>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(-1)}>Previous</button>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(1)}>Next</button>
      </Modal.Footer>
    </>
  )
}