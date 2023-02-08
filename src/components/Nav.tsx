import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
// can import a nav stylesheet here

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Hoop Vision</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
