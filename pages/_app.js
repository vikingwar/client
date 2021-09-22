import "normalize.css";
import "../styles/globals.css";
// import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";

// import Layout from "../layout";

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    <Component {...pageProps} />
    // </Layout>
  );
}
export default wrapper.withRedux(MyApp);
