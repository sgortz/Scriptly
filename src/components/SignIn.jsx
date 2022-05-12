/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  createAccount, signInWithGoogle, logOut, signInWithEmail,
} from '../auth/Firebase';

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
    }
    setShow(true);
    setSignUpStatus(false);
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
        {loginStatus ? 'log out' : 'JOIN NOW'}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Scriptly</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {!loginStatus
            ? (
              <>
                <TopLoginContainer>
                  Scriptly
                  <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="email" />
                  <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                  <Button onClick={() => signInOrLogin(username, password)}>{!signUpStatus ? 'login' : 'sign up'}</Button>
                  <center>or</center>
                  <button type="button" className="btn btn-primary" onClick={() => googleLogin()}>Log-in with Google</button>
                </TopLoginContainer>
                <BottomLoginContainer>
                  Don&apos;t have an account?
                  <Button variant="primary" onClick={() => { setSignUpStatus(true); }}>sign up</Button>
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
`;
const BottomLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;
