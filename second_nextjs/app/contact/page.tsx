import cssStyle from "./contact.module.css";
import Header from "../components/header";
import Footer from "../components/footer";


const Contact = () => {
  return (
    <>
    <Header/>
    <div className={cssStyle.contact}>
        <h1>Contact Us</h1>
        <p>
          Reach out to us via email at <strong>support@abc.com</strong> or call us at <strong>(123) 456-7890</strong>.
        </p>
        <form className={cssStyle.form}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    
    <Footer/>
    </>
  )
}

export default Contact;