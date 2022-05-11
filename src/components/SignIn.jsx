/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  createAccount, signInWithGoogle, logOut, signInWithEmail,
} from '../auth/Firebase';

function SignIn({ setPage, page }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signUpStatus, setSignUpStatus] = useState(false);
  const [loginStatus, setLoginStatus] = useState(Boolean(localStorage.email));
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   if(localStorage.email){
  //     setLoginStatus(true)
  //   } else {
  //     setLoginStatus(false)
  //   }
  // },[localStorage.email, show, loginStatus])

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
    try {
      await signInWithGoogle();
      setLoginStatus(true);
      setSignUpStatus(false);
      setShow(false);
      setPage('homepage');
    } catch (err) {
      alert(err.code);
      localStorage.clear();
    }
    // signInWithGoogle().then((result) => {
    //   setLoginStatus(true);
    //   setSignUpStatus(false);
    //   setShow(false);
    //   setPage('homepage');
    // }).catch((err) => {
    //   alert(err.code);
    //   localStorage.clear();
    // });
  };
  const emailLogin = async () => {
    try {
      await signInWithEmail(username, password);
      setLoginStatus(true);
      setSignUpStatus(false);
      setShow(false);
      setPage('homepage');
    } catch (err) {
      alert(err.code);
      localStorage.clear();
    }
    // signInWithEmail(username, password).then((result) => {
    //   //console.log('thinks it logged in');
    //   setLoginStatus(true);
    //   setSignUpStatus(false);
    //   setShow(false);
    //   setPage('homepage');
    // }).catch((err) => {
    //  // console.log('something went wrong');
    //   alert(err.code);
    //   localStorage.clear();
    // });
  };

  const signInOrLogin = () => {
    if (signUpStatus) {
      createAccount(username, password);
    } else {
      emailLogin(username, password);
    }
  };
  console.log(page);
  return (
    <>
      <Button variant="primary" className="landingButton" onClick={handleShow}>
        {loginStatus ? 'log out' : 'Show me what I could achieve'}
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
