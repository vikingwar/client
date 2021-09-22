import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
          <title>Vikings War - Play & Earn</title>
          <meta name="description" content="Viking War is an online #game to conquer ancient #lands. #Play2Earn - #NFT #game on #blockchain - #BSC" />

          <meta property="og:site_name" content="Vikings War" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Vikings War - Play & Earn" />
          <meta property="og:url" content="https://vikingwar.io" />
          <meta
            property="og:description"
            content="Viking War is an online #game to conquer ancient #lands. #Play2Earn - #NFT #game on #blockchain - #BSC"
          />
          <meta property="og:image" content="/images/banner.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;500&display=swap" rel="stylesheet" />
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
