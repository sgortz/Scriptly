import React, { useState } from 'react';
import styled from 'styled-components';
import { signInWithGoogle, loggedIn, signInWithEmail } from '../auth/Firebase';


const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')



  return (
    <SignInContainer>
      <TopLoginContainer>
      Scriptly
        <input type='text' onChange={(e)=>setUsername(e.target.value)}placeholder='username'></input>
        <input type='text' onChange={(e)=>setPassword(e.target.value)}placeholder='password'></input>
        <button onClick={()=>signInWithEmail(username,password)}>log-in</button>
        <div>----------- or -----------</div>
        <button type="button" className="btn btn-primary" onClick={()=>signInWithGoogle()}>
            Log-in with Google
          </button>
      </TopLoginContainer>
      <BottomLoginContainer>
        Don't have an account? <a href=''>sign up</a>
      </BottomLoginContainer>
    </SignInContainer>
  )
}

export default SignIn;

const SignInContainer = styled.dialog`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  padding: 1em;
  align-content: center;
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
