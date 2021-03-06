import "../styles/globals.scss";

import "../styles/home.scss";
import "../styles/about.scss";

import "../styles/button.scss";
import "../styles/wave.scss";
import "../styles/navbar.scss";
import "../styles/content.scss";


import "../styles/404.scss";

import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
