import '../styles/font.css';
import '../styles/index.css';
import 'codemirror/lib/codemirror.css';
// Themes
import 'codemirror/theme/material.css';
import 'codemirror/theme/ayu-dark.css';
import 'codemirror/theme/ayu-mirage.css';
import 'codemirror/theme/dracula.css';
// Languages
if (typeof navigator !== 'undefined') {
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/ruby/ruby');
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
