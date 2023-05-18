//_document.js next file
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Type faster on Gmail, Outlook andChatGPT"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="autocomplete.live" />
        <meta
          property="og:description"
          content="Type faster on Gmail, Outlook and ChatGPT"
        />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="autocomplete.live" />
        <meta
          name="twitter:description"
          content="Type faster on Gmail, Outlook and ChatGPT"
        />

        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossorigin=""
        />
        <link
          rel="preload"
          href="https://framerusercontent.com/modules/assets/5APw0CyGpw4e2mLvk4ag8u7g8dQ~gM-cZHT0lrZmqgQbXqOd0xFyfci03ioeOK3otp_JW2Q.ttf"
          as="font"
          crossorigin=""
        />
        <link rel="canonical" href="https://autocomplete.live" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
