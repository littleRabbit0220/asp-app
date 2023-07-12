import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <meta property="og:image" content={"https://tweenpages.vercel.app/greensock_plus_nextjs.png"}></meta>
          <meta property="og:title" content={"title"} />
          <meta property="og:description" content={"description"} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
