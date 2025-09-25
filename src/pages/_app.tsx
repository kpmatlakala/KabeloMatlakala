// pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';

// DelightPlus UI styles
import 'delightplus-ui/dist/styles.css';

// Global CSS
import '../styles/globals.css';

// Theme Context
import { ThemeProvider } from '@/contexts/ThemeContext';

// Utilities & Components
import { cn } from '@/lib/utils';
import FloatingHeader from '@/components/Header/FloatingHeader';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Metadata — replaces the `metadata` export in App Router */}
      <Head>
        <title>Kabelo P. Matlakala | Portfolio</title>
        <meta name="description" content="Built with Next.js + Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Layout */}
      <body className={cn('font-montserrat', 'theme-transition')}>
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
          {/* Header */}
          {/* <Header /> */}
          <FloatingHeader logoFloating />

          {/* Page content */}
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </body>
    </>
  );
}
