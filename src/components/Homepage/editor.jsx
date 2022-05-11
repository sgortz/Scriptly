import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import {useRecoilState} from 'recoil';
import {editedSpeechText, updateTitle} from '../../atoms.jsx';


const MyEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const [tempText, setTemp] = useState('')

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

<<<<<<< HEAD
  let counter = 0;
=======

>>>>>>> main

  return (
    <Slate editor={editor} value={initialValue} onChange={(value) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
      let currentString = '';
      value.forEach((element) => {
        currentString += element.children[0].text;
      })
      setEdited(currentString)
<<<<<<< HEAD
=======
=======

        if (event.inputType === 'insertParagraph') {
          let data = editedValue + ' '
          setEdited(value[0].children[0].text + ' ')
        } else {
          setEdited(value[0].children[0].text)
          console.log(editedValue, 'edited value')
          console.log(event)
        }

>>>>>>> main
>>>>>>> main
    }}>
      <form>
        <input type='text' placeholder={titleValue} value={titleValue} onChange={titleListener}></input>
      </form>
      <Editable style={{margin: '25px', width: '80vw'}}/>
    </Slate>
  )
}

export default MyEditor;