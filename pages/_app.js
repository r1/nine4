import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="icon"
          type="image/png"
          href="https://nine4.app/favicon.png"
        />
      </Head>
      <Helmet htmlAttributes={{ lang: "en" }} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
