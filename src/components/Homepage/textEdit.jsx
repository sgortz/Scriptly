import React from 'react';
import {currentSpeechText, editedSpeechText} from '../../atoms.jsx';
import {useRecoilState} from 'recoil';

const TextEdit = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);

  const editListener = (event) => {
    setEdited(event.target.value)
  }

  return (
    <div style={{height: '50vw', width: '50vw', verticalAligh: 'top', backgroundColor: 'gray'}}>
      <input
        type='textarea'
        value={currentValue}
        onChange={() => {editListener(event)}}
        style={{
          height: '50vw',
          width: '50vw'
        }}/>
    </div>
  )
}

export default TextEdit;



