import { useState, useContext, useEffect } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Context } from '../store';

export default function CodeDisplay() {
  const [state] = useContext(Context);
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(state.lang.demo);
  }, [state.lang.name]);

  return (
    <CodeMirror
      value={content}
      options={{ mode: state.lang.name, theme: 'material', lineNumbers: true }}
      onBeforeChange={(editor, data, value) => setContent(value)}
    />
  );
}
