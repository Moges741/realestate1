import React from 'react'
import styles from './header.module.css';
import { Link } from 'react-router';
const Header = () => {
  return (
    <section>
          <div className={styles.header_container}>
     <div className={styles.logo}> <h2>RS</h2></div>
      <div className={styles.nav_links}>
        <div>
        <Link to="/signup">SignUp</Link>
      </div>
      <div><Link to="/login">SignIn</Link></div>
      <div><Link to="/contact">Contact Us</Link></div>
      <div><Link to="/properties">Properties</Link></div>
      </div>
    </div>
    <div className={styles.title}>

      <h1>EM Real Estate Your Gateway to Dream Homes</h1>


    </div>
    </section>

  )
}

export default Header
