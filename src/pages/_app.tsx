// pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";


// Global CSS
import "../styles/globals.css";

// DelightPlus UI styles
import "delightplus-ui/dist/styles.css";
// Theme Context
import { ThemeProvider } from "delightplus-ui";

// Utilities & Components
import { cn } from "@/lib/utils";
import FloatingHeader from "@/components/Header/FloatingHeader";


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kabelo P. Matlakala | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Kabelo P. Matlakala, a passionate Full Stack Developer skilled in Next.js, React, Node.js, and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO Keywords */}
        <meta
          name="keywords"
          content="Kabelo Matlakala, Full Stack Developer, Next.js, React, Node.js, Tailwind CSS, JavaScript, Portfolio"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Kabelo P. Matlakala | Full Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Kabelo's projects, skills, and experience in full stack development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://delightplus.vercel.com" />
        <meta
          property="og:image"
          content="https://delightplus.vercel.com/social-image.png"
        />

        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kabelo P. Matlakala | Full Stack Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore Kabelo's projects, skills, and experience in full stack development."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/path-to-favicon-or-social-image.png"
        /> */}

        {/* Favicon */}
        <link rel="icon" href="/uploads/favicon.png?v=2" />
      </Head>

      {/* Layout */}
      <body className={cn("font-montserrat", "theme-transition")}>
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
