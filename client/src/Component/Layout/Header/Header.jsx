import React from 'react'
import styles from './header.module.css';
const Header = () => {
  return (
    <div className={styles.header_container}>
     <div className={styles.logo}> <h2>RS</h2></div>
      <div className={styles.nav_links}>
        <div>
        <a href="#">SignUp</a>
      </div>
      <div><a href="#">SignIn</a></div>
      <div><a href="#">Contact Us</a></div>
      <div><a href="#">Properties</a></div>
      </div>
    </div>
  )
}

export default Header
