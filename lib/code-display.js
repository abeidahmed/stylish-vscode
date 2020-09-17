import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Controlled as CodeMirror } from 'react-codemirror2';
import beautify from 'js-beautify';
import { dasherized } from '../utils/helpers';

export default function CodeDisplay() {
  const router = useRouter();
  const { lang, theme, font } = router.query;

  const [content, setContent] = useState('');

  const starterCode = `
  const pluckDeep = key => obj => key.split('.')

  const compose = (...fns) => res => console.log(res, ...fns)

  const unfold = (f, seed) => {
    const go = (f, seed, acc) => {
      const res = f(seed)
      return res ? go(f, res[1], acc.concat([res[0]])) : acc
    }
    return go(f, seed, [])
  }`;

  useEffect(() => {
    setContent(beautify(starterCode, { indent_size: 2 }));
  }, []);

  return (
    <CodeMirror
      className={`${font ? font : 'cascadia-code'}`}
      value={content}
      options={{
        mode: lang ? dasherized(lang) : 'javascript',
        theme: theme || 'material',
        lineNumbers: true,
        viewportMargin: Infinity,
        tabSize: 2,
      }}
      onBeforeChange={(editor, data, value) => setContent(value)}
    />
  );
}
