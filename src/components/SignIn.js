import React, { useState } from 'react';
import styled from 'styled-components';
import { signInWithGoogle, loggedIn, signInWithEmail , monitorAuthState} from '../auth/Firebase';
import { loginStatus,showLoginModal, loginText } from '../atoms.jsx'
import { useRecoilState } from 'recoil'


const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false);
  const [signStatus, setSignStatus] = useState(localStorage.email)
  const [login, setLogin] = useRecoilState(loginStatus)
  const [loginModal, setLoginModal] = useRecoilState(showLoginModal)
  const [text, setLoginText] = useRecoilState(loginText)

  // let signUP = () => {
  //   return <SignUp/>
  // }
const handleClose = () => setShow(false)
const handleShow = () => setShow(true)
  return (
    <Modal show={show} onHide={handleClose}>
    <SignInContainer>
      <TopLoginContainer>
      Scriptly

        <input type='text' onChange={(e)=>setUsername(e.target.value)}placeholder='email'></input>
        <input type='password' onChange={(e)=>setPassword(e.target.value)}placeholder='password'></input>
        <button onClick={()=>signInWithEmail(username,password)}>log-in</button>
        <form method="dialog">
          <button>click</button>
        </form>
        <div>----------- or -----------</div>

        <button type="button" className="btn btn-primary" onClick={()=>signInWithGoogle()}>
            Log-in with Google
          </button>

      </TopLoginContainer>
      <BottomLoginContainer>
        Don't have an account? <a href='' onClick= {()=>signUp()}>sign up</a>
      </BottomLoginContainer>
      </SignInContainer>
      </Modal>

  )
}

export default SignIn;

const SignInContainer = styled.dialog`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;

  align-content: center;
  background: rgba(171,186,234,2);
`
const TopLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color:  #ABBAEA;
  padding: 1em;
  justify-content: center;
`
const BottomLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color:  #ABBAEA;
  padding: 1em;
`
const BackDrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
z-index: 2;
background: rgba(0, 0, 0, 2);
`