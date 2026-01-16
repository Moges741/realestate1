import { Outlet } from "react-router";
import ProfileNav from "./ProfileNav";
import "./profilelayout.css";
import { useGetSession } from "../auth/useSession";

function ProfileLayout() {
  const { data, status } = useGetSession();
  const profileData = data?.profile.at(0);
  const { display_name, email, profile_image } = profileData;
  return (
    <div>
      <div className="hero-fixer"></div>
      <div className="nav-links">
        <ProfileNav />
      </div>
      <div className="profile-subcontainer">
        <div className="divider-container">
          <div>
            <div className="profile-detail">
              <img src={profile_image || "/profile.jpg"} alt="" width="100" height="100" />
            </div>
            <div className="discription">
              <p>{display_name}</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="divider-profile"></div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileLayout;
