import Head from "next/head";
import cssStyle from "./page.module.css"

export default function Home() {
  return (
    <div className={cssStyle.body}>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={cssStyle.orange}>Hello from Hassoo Bhai</h1>
    </div>
  );
}