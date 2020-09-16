import { useEffect } from 'react';
import Prism from 'prismjs';
import '../styles/font.css';
import '../styles/index.css';
import '../vendor/js/prism-live';
import '../styles/prism/dracula.css';
import '../vendor/css/prism-live.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
