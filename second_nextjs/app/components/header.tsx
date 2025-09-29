import Link from 'next/link';
import cssStyle from './header.module.css';

const Header = () => {
  return (
    <header className={cssStyle.header}>
      <h1 className={cssStyle.title}>Welcome to my Second assignment!</h1>
      <nav className={cssStyle.navbar}>
        <ul className={cssStyle.navList}>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li>Servises</li>
          <li><Link href='/contact'></Link>Contact Us</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;