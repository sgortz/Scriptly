import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import {useRecoilState} from 'recoil';
import {currentSpeechText, editedSpeechText, updateTitle} from '../../atoms.jsx';


const MyEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [titleValue, setTitle] = useRecoilState(updateTitle);

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: currentValue }],
    },
  ];

  const titleListener = () => {
    console.log(event.target.value)
    setTitle(event.target.value)
    console.log(titleValue, 'this is titlevalue')
  }


  return (
    <Slate editor={editor} value={initialValue} onChange={(value) => {
      setEdited(value[0].children[0].text)
      console.log(typeof(editedValue), 'edited value')
    }}>
      <form>
        <input type='text' placeholder='Input Title' onChange={titleListener}></input>
      </form>
      <Editable style={{margin: '25px', width: '80vw'}}/>
    </Slate>
  )
}

export default MyEditor;