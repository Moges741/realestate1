import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { getSessionApi, LogoutApi } from "../../../page/auth/auth";
import { useGetSession } from "../../../page/auth/useSession";
import { useLogout } from "../../../page/auth/useLogout";
const Header = () => {
  // const [session, setSession] = useState(null);
  // const [profile, setProfile] = useState(null);
  // const [profileImage, setProfileImage] = useState(null);

  // useEffect(() => {
  //   async function getSession() {
  //     try {
  //       const {
  //         session: sessionData,
  //         profile: profileData,
  //         profileImage: profileImageData,
  //       } = await getSessionApi();
  //       setSession(sessionData);
  //       setProfile(profileData);
  //       setProfileImage(profileImageData);
  //     } catch (error) {
  //       console.error("Error fetching session:", error);
  //       setSession(null);
  //       setProfile(null);
  //     }
  //   }

  //   getSession();
  // }, []);
  const { data, status, error } = useGetSession();
  console.log(data);
  console.log(status, error);

  const session = data?.session ?? null;
  console.log(session);
  const profile = data?.profile ?? null;
  console.log(profile);
  const { role, profile_image } = profile || {};
  const { logout, isPending, error: logoutError } = useLogout();
  console.log(profile_image);

  // async function handleLogout(e) {
  //   e.preventDefault();
  //   console.log("Logout clicked");
  //   try {
  //     await LogoutApi();
  //     localStorage.clear();
  //     sessionStorage.clear();
  //     // window.location.href = "/";
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  console.log(session, profile);

  return (
    <section>
      <div className={styles.header_container}>
        <div className={styles.logo}>
          {" "}
          <Link to="/">Em</Link>
        </div>
        <div className={styles.nav_links}>
          {session ? (
            <div className={styles.profile}>
              <img
                src={profile_image || "src/Component/Layout/Header/profile.jpg"}
                alt="profile"
                className={styles.profile_image}
              />
              <div className={styles.profile_links}>
                <Link to="/profile">Profile</Link>
                <button className={styles.profile_button} onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <div>
                <Link to="/signup">SignUp</Link>
              </div>
              <div>
                <Link to="/login">SignIn</Link>
              </div>
            </>
          )}
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/properties">Properties</Link>
          </div>
          <div>
            <Link to="/contact">Contact us</Link>
          </div>
          {profile && role === "admin" && (
            <div>
              <Link to="/dashboard">Admin</Link>
            </div>
          )}
        </div>
      </div>
      {/* <div className={styles.title}>
        <h1>EM Real Estate Your Gateway to Dream Homes</h1>
      </div> */}
    </section>
  );
};

export default Header;
