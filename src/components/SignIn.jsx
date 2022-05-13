/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  createAccount, signInWithGoogle, logOut, signInWithEmail,
} from '../auth/Firebase';
import icon from '../assets/google.png';
import { GiQuillInk } from 'react-icons/gi';

function SignIn({ setPage, cName ,text }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signUpStatus, setSignUpStatus] = useState(false);
  const [loginStatus, setLoginStatus] = useState(Boolean(localStorage.email));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    if (localStorage.email) {
      await logOut();
      setLoginStatus(false);
      setPage('landing');
      setShow(false);
      setSignUpStatus(false);
    } else {
      setShow(true);
      setSignUpStatus(false);
    }
  };

  const googleLogin = async () => {
    await signInWithGoogle();
    if (localStorage.email) {
      setLoginStatus(true);
      setSignUpStatus(false);
      setShow(false);
      setPage('homepage');
    }
  };
  const emailLogin = async () => {
    await signInWithEmail(username, password);
    if (localStorage.email) {
      setLoginStatus(true);
      setSignUpStatus(false);
      setShow(false);
      setPage('homepage');
    }
  };

  const signInOrLogin = () => {
    if (signUpStatus) {
      createAccount(username, password);
    } else {
      emailLogin(username, password);
    }
  };

  return (
    <>
      <Button variant="outline-dark" className={cName} onClick={handleShow}>
        {cName === 'join-now-button' ? 'JOIN NOW' : loginStatus ? 'Log-out' : 'Log-in'}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Title>
          <TitleContainer>
            <GiQuillInk/>
            <h1>Scriptly

            </h1>
            <H2>Show Me What You Can Achieve</H2>
          </TitleContainer>
        </Modal.Title>

        <Modal.Body>
          {!loginStatus
            ? (
              <>
                <TopLoginContainer>
                  <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="email" />
                  <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" onKeyPress={(e) => {
                    e.key === 'Enter' && emailLogin()
                  }}/>
                  <Button variant="primary" onClick={() => signInOrLogin(username, password)}>{!signUpStatus ? 'Log-in' : 'Sign up'}</Button>
                  <center>or</center>
                  <button type="button" className="btn btn-primary" onClick={() => googleLogin()}><img src={icon} alt=''/>Log-in with Google</button>
                </TopLoginContainer>
                <BottomLoginContainer>
                  Don&apos;t have an account?
                  <Button variant="primary" onClick={() => { setSignUpStatus(true); }}>Sign up</Button>
                </BottomLoginContainer>
              </>
            ) : <div>You are logged out</div>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignIn;

const TopLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: center;
  font-family: 'Hanuman', serif;
  font-weight: 700;
`;
const BottomLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  font-family: 'Hanuman', serif;
  text-align: center;
`;
const TitleContainer = styled.div`
font-family: 'Hanuman', serif;
font-weight: 700;
text-align: center;
`
const H2 = styled.h2`
font-size: 10px;
`