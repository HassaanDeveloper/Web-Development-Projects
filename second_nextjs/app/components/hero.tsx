import cssStyle from './hero.module.css';


const Hero = () => {
  return (
    <div className={cssStyle.hero}>
      <h2>Your Journey Begins Here</h2>
      <p>Discover the world of coding and start your journey today!</p>
    </div>
  )
}

export default Hero;