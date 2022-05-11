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

export default function Result2({changePage, strongEmotions, weakEmotions}) {
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

  const mainEmotions = strongEmotions.map(emotion =>
    <Col>
      <div className="result2-card biggest-card" id={emotion}>
        <div className="main-card-container">
          {allEmojis[emotion]}
          <h3>{emotion}</h3>
        </div>
      </div>
    </Col>
  )

  const otherEmotions = weakEmotions.map(emotion =>
    <Col>
      <div className="result2-card" id={emotion}>
        <div className="main-card-container">
          {allEmojis[emotion]}
          <h3>{emotion}</h3>
        </div>
      </div>
    </Col>
  )


  return (
    <>
      <Modal.Header>
        Tone analysis 2/4
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {mainEmotions}
            {otherEmotions}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="results-footer">
        <p>{`Your speech mainly convey a ${strongEmotions[0]} tone.`}</p>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(-1)}>Previous</button>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => changePage(1)}>Next</button>
      </Modal.Footer>
    </>
  )

}