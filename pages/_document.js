import Document, { Html, Head, Main, NextScript } from 'next/document';
import { FontLink } from '../lib/font-link';
import { MetaTag } from '../lib/meta-tag';
import { GTag } from '../lib/gtag';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <MetaTag />
          <FontLink />
          <GTag />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
