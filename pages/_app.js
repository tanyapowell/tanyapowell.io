import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "styles/themeConfig";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charSet="UTF-8"></meta>
        <title>Tanya Powell</title>
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
