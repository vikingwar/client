import "normalize.css";
import "../styles/globals.css";

import Providers from "./Providers";
import { ToastListener } from "contexts/ToastsContext";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <ToastListener />
      <Component {...pageProps} />
    </Providers>
  );
}
export default MyApp;
