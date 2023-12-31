import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import GlobalStyle from "../styles/globalStyles";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
