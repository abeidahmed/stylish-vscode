import '../styles/font.css';
import '../styles/index.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
if (typeof navigator !== 'undefined') {
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/ruby/ruby');
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
