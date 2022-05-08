import React from 'react';
import {currentSpeechText, editedSpeechText} from '../../atoms.jsx';
import {useRecoilState} from 'recoil';

const TextEdit = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);

  const editListener = (e) => {
    console.log(event)
  }

    console.log(editedValue)

  return (
    <div style={{height: '100vw', width: '100vw', backgroundColor: 'gray'}}>
      <input
        type='textarea'
        name='textBox'
        onChange={editListener(event)}
        style={{
          height: '50vw',
          width: '50vw'
        }}/>
    </div>
  )
}

export default TextEdit;



