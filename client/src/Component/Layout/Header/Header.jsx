import React, { useEffect, useState } from 'react'
import styles from './header.module.css';
import { Link, useNavigate } from 'react-router';
import { getSessionApi, LogoutApi } from '../../../page/auth/auth';
const Header = () => {
   const [session, setSession] = useState(null);
   const navigate = useNavigate();
  useEffect(() => {
    async function getSession() {
      const sessionData = await getSessionApi();
      console.log(sessionData)
      setSession(sessionData);
    }

    getSession();
  }, [session]);
  async function handleLogout(e){
    e.preventDefault();

   try{
    await LogoutApi();
    sessionStorage.clear();
    navigate('/');
   }catch(error){
    console.log(error.message)
   }
  }
  console.log(session)
  return (
    <section>
          <div className={styles.header_container}>
     <div className={styles.logo}> <h2>RS</h2></div>
      <div className={styles.nav_links}>
        {
          session ? (
            <div className={styles.profile}>
              <img src="src/Component/Layout/Header/profile.jpg" alt="profile" className={styles.profile_image} />
              <div className={styles.profile_links}>
                <Link to="/profile">Profile</Link>
                <button className={styles.profile_button} onClick={(e)=>handleLogout(e)}>Logout</button>
              </div>
            </div>
          ) : (
            <>
              <div><Link to="/signup">SignUp</Link></div>
              <div><Link to="/login">SignIn</Link></div>
            </>
          )
        }
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
