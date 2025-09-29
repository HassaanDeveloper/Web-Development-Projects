import Navbar from "./components/navbar";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import TrustedSection from "./components/trustedSection";
import Courses from "./components/courses";
import Achivement from "./components/achivement";
import Coursetabs from "./components/coursetabs";
import Team from "./components/team";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar />
      <HeroSection/>
      <TrustedSection/>
      <Courses/>
      <Achivement/>
      <Coursetabs/>
      <Team/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
