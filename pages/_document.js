import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
          <title>Vikings: War of Clan Events and Competitions Guide - Official site</title>
          <meta
            name="description"
            content="Special events and competitions are held regularly in Vikings: War of Clans. This guide will detail the different types and the rewards you can win."
          />
        </Head>
        <body className="rs">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
