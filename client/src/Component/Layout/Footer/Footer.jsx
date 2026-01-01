import React from 'react'
import styles from './footer.module.css';
const Footer = () => {
  return (
    //implement footer section
    <section className={styles.footer_container}>
    
        <div className={styles.footer_links}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Properties</a>
        </div>
        <h3>RealState &copy; 2026</h3>
  


       
      
    </section>
  )
}

export default Footer
