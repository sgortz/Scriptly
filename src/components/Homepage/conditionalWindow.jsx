import React from 'react';
import {useRecoilState} from 'recoil';
import {pageView} from '../../atoms.jsx';
import SpeechView from './speechView.jsx';
import TextEdit from './textEdit.jsx';

const ConditionalWindow = () => {

  const [pageValue, setPage] = useRecoilState(pageView);

  if (pageValue === 'speech') {
    return (<SpeechView/>)
  } else if (pageValue === 'text') {
    console.log(pageValue)
    return (<TextEdit/>)
  }
}

export default ConditionalWindow;