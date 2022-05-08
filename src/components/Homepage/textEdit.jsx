import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

const TextEdit = () => {

  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );

  const editor = useRef(null);

  const focusEditor = () => {
    editor.current.focus();
  }

  useEffect(() => {
    focusEditor()
  }, []);

  return (
    <div onClick={focusEditor} style={{height: '100vw', width: '100vw', backgroundColor: 'gray'}}>
    <Editor
        ref={editor}
        editorState={editorState}
        onChange={editorState => setEditorState(editorState)}
      />
    </div>
  )
}

export default TextEdit;



