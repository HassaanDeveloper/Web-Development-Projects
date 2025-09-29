import cssStyle from "./about.module.css";
import Header from "../components/header";
import Footer from "../components/footer";


const About = () => {
  return (
    <>
    <Header/>
      <main className={cssStyle.page}>
      <h1 className={cssStyle.heading}>About page</h1>
      <p className={cssStyle.para}>Here it is my about page content. Here we talk about who we are and what we do.</p>
    </main>
    <Footer/>
    </>
  )
}

export default About;