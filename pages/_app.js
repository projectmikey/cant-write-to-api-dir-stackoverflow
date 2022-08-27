import React from "react";
import Header from "../components/Header";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
    return (
        <>
          <Header />
          <Component {...pageProps} />
        </>
    );
  }