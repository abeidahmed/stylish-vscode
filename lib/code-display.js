import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Controlled as CodeMirror } from 'react-codemirror2';

export default function CodeDisplay() {
  const router = useRouter();
  const { lang, theme } = router.query;

  const [content, setContent] = useState('');

  useEffect(() => {
    fetchDemo();
  }, [lang]);

  async function fetchDemo() {
    try {
      const res = await axios.get('/api/languages', {
        params: {
          search: lang || 'javascript',
        },
      });
      setContent(res.data[0].demo);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <CodeMirror
      value={content}
      options={{
        mode: lang || 'javascript',
        theme: theme || 'material',
        lineNumbers: true,
      }}
      onBeforeChange={(editor, data, value) => setContent(value)}
    />
  );
}
