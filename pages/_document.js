import Document, { Html, Head, Main, NextScript } from "next/document";
import { IBM_Plex_Sans } from "@next/font/google";



export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

        </Head>
        <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}