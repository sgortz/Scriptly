import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createAccount, signInWithGoogle, loggedIn, logOut, signInWithEmail , monitorAuthState} from '../auth/Firebase';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [signUpStatus, setSignUpStatus] = useState(false)
  const [loginStatus, setLoginStatus] = useState(Boolean(localStorage.email))
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(localStorage.email){
      setLoginStatus(true)
    } else {
      setLoginStatus(false)
    }
  },[localStorage.email, show, loginStatus])

  const handleClose = () => setShow(false);

  const handleShow = () =>{
    if(localStorage.email) {
      logOut();
      setLoginStatus(false)
    }
   setShow(true);
   setSignUpStatus(false)
  }

const googleLogin = () => {
  signInWithGoogle().then(result => {
    setLoginStatus(true)
    setSignUpStatus(false)
    setShow(false)
  }).catch(err=>{
    alert(err.code)
    localStorage.clear();
  })

}
const emailLogin = (username,password) => {
  signInWithEmail(username,password).then(result => {
    setLoginStatus(true)
    setSignUpStatus(false)
    setShow(false)
  }).catch(err => {
    alert(err.code)
    localStorage.clear();
  })
}

 const signInOrLogin = (username,password) => {
  if(signUpStatus) {
    createAccount(username,password)
  } else{
    emailLogin(username,password)
  }
 }
 console.log(localStorage.email)
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
     {loginStatus ? 'log out' : 'log in'}
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Scriptly</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      {!loginStatus ?
      <>
        <TopLoginContainer>Scriptly
          <input type='text' onChange={(e)=>setUsername(e.target.value)}placeholder='email'/>
          <input type='password' onChange={(e)=>setPassword(e.target.value)}placeholder='password'/>
          <button onClick={()=>signInOrLogin(username,password)}>{!signUpStatus? 'login' : 'sign up'}</button>
          <center>or</center>
          <button type="button" className="btn btn-primary" onClick={()=>googleLogin()}>Log-in with Google</button>
        </TopLoginContainer>
        <BottomLoginContainer>Don't have an account? <Button variant='primary' onClick={()=>{setSignUpStatus(true)}}>sign up</Button></BottomLoginContainer>
        </> : <div>You are logged out</div>}
      </Modal.Body>
    </Modal>
  </>
  )
}

export default SignIn;

const TopLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: center;
`
const BottomLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`
