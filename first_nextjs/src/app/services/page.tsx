import Head from "next/head";
import cssStyle from "./service.module.css";
import Link from "next/link"
const servicespage = () => {
    return (
        <div className={cssStyle.body}>
            <Head>
                <title>Services</title>
            </Head>
        <h1 className={cssStyle.red}>Yoo buddy from services page to Hassoo bhai</h1>
        <Link href="/services/web-developer" className={cssStyle.link} title="nested page">Web-Developer</Link>
        </div>
    )
}
export default servicespage