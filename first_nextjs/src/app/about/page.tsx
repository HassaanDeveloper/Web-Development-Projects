import Head from "next/head";
import cssStyle from "./about.module.css";

function aboutpage() {
    return (
        <div className={cssStyle.body}>
            <Head>
                <title>About</title>
            </Head>
            <h1 className={cssStyle.black}>Hey from Aboutpage of hassoo bhai</h1>
        </div>
    )
}
export default aboutpage