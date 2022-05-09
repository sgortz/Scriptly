import React from 'react';
import {currentSpeechText, editedSpeechText} from '../../atoms.jsx';
import {useRecoilState} from 'recoil';
import MyEditor from './editor.jsx'

const TextEdit = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);

  const editListener = (event) => {
    setEdited(event.target.value)
  }

  return (
    <div style={{height: '100vw', width: '100vw', verticalAligh: 'top'}}>
      <MyEditor/>
    </div>
  )
}

export default TextEdit;



