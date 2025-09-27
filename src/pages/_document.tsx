// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* <link rel="icon" type="image/png" href="/uploads/favicon.png?v=2" /> */}
        {/* Optional: Apple Touch Icon or Manifest */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
