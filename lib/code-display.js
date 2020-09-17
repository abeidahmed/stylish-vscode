import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Controlled as CodeMirror } from 'react-codemirror2';

export default function CodeDisplay() {
  const router = useRouter();
  const { lang, theme, font } = router.query;

  const [content, setContent] = useState('');

  const starterCode = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

  const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

  const unfold = (f, seed) => {
    const go = (f, seed, acc) => {
      const res = f(seed)
      return res ? go(f, res[1], acc.concat([res[0]])) : acc
    }
    return go(f, seed, [])
  }`;

  useEffect(() => {
    setContent(starterCode);
  }, []);

  return (
    <CodeMirror
      className={`${font ? font : 'cascadia-code'}`}
      value={content}
      options={{
        mode: lang || 'javascript',
        theme: theme || 'material',
        lineNumbers: true,
        viewportMargin: Infinity,
        lineWrapping: true,
        tabSize: 2,
      }}
      onBeforeChange={(editor, data, value) => setContent(value)}
    />
  );
}
