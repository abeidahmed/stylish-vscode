import { useState } from 'react';

export default function CodeDisplay() {
  const [code, setCode] = useState('');

  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      className="prism-live language-js line-numbers"
      data-gramm_editor="false"
    ></textarea>
  );
}
