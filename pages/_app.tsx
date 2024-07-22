import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { appWithTranslation } from "next-i18next";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Head from 'next/head';
import ScrollToTop from "../components/ScrollToTop";

const careemFont = localFont({ src: "../fonts/CareemFont.otf" });
export const metadata: Metadata = {
  title: "Tesla",
  description: "Tesla",
};

 function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <link rel="shortcut icon" href="/static/mini-logo.ico" />
  </Head>
  <main style={careemFont.style} >
    <Component {...pageProps} />
    <ScrollToTop />
  </main>
  </>
}

export default appWithTranslation(MyApp);
