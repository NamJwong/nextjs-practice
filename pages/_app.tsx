import { AppProps } from "next/app";

import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color: #ffb7b7;
          }
        `}
      </style>
    </>
  );
}
