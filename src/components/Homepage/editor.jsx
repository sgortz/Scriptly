import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import {useRecoilState} from 'recoil';
import {currentSpeechText, editedSpeechText} from '../../atoms.jsx';


const MyEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: currentValue }],
    },
  ];


  return (
    <Slate editor={editor} value={initialValue} onChange={(value) => {
      setEdited(value[0].children[0].text)
      console.log(typeof(editedValue), 'edited value')
    }}>
      <Editable/>
    </Slate>
  )
}

export default MyEditor;