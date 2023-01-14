import "../styles/globals.css";
import Head from "next/head";
import { ComboProvider } from "../context/ComboContext";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>KFC Web</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
    </Head>
    <ComboProvider>
      <Component {...pageProps} />
    </ComboProvider>
  </>
);

export default App;
