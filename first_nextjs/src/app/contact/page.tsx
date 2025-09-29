import Head from "next/head";
import cssStyle from "./contact.module.css";


export default function contactUs() {
    return (
        <div className={cssStyle.body}>
            <Head>
                <title>Contact Us</title>
            </Head>
            <h1 className={cssStyle.blue}>Hi from Contact page to Hassoo bhai</h1>
        </div>
    )
}