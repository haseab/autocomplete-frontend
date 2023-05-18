import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Script from "next/script";
import Navbar from "../src/components/Navbar";
import "../styles/App.css";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#7B1AF7",
    },
    mode: "light",
  },
});

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JK2YV6BXLC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JK2YV6BXLC');
        `}
      </Script>
      <Navbar />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
