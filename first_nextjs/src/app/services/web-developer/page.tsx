import Head from "next/head";
import cssStyle from "./web-dev.module.css";
import React from 'react'

function web_developer_page() {
  return (
    <div className={cssStyle.body}>
      <Head>
        <title>Web Developer</title>
      </Head>
        <h1 className={cssStyle.black}>Welcome to Web Developer Page</h1>
    </div>
  )
}

export default web_developer_page;
