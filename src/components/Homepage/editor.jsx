import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import {useRecoilState} from 'recoil';
import {editedSpeechText, updateTitle} from '../../atoms.jsx';


const MyEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [titleValue, setTitle] = useRecoilState(updateTitle);

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: editedValue }],
    },
  ];

  const titleListener = () => {
    setTitle(event.target.value)
  }


  return (
    <Slate editor={editor} value={initialValue} onChange={(value) => {
      setEdited(value[0].children[0].text)
<<<<<<< HEAD
=======
      console.log(editedValue)
>>>>>>> main
    }}>
      <form>
        <input type='text' placeholder='Input Title' onChange={titleListener}></input>
      </form>
      <Editable style={{margin: '25px', width: '80vw'}}/>
    </Slate>
  )
}

export default MyEditor;