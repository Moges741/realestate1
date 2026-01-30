import { NavLink, Outlet,  useNavigate } from "react-router";
// import { useState, useEffect } from "react";
import "./dashboard.css";
import { useGetSession } from "../auth/useSession";

function Dashboard() {
  const { data } = useGetSession();
  const profile = data?.profile ?? null;
  const session = data?.session ?? null;
  const { profile_image } = profile || {};
  
  const navigate = useNavigate();


  if (!session) {
    navigate("/");
    return null;
  }

  return (
    <>
      <div className="dashboard-fixer"></div>
      
      <div className="container">
        <div className={`sidebar`}>
          <div className="profile">
            <div className="profile-img">
              <img 
                src={profile_image || "/profile.jpg"} 
                alt="Admin" 
              />
            </div>
            <div className="description">
              <p>Admin</p>
              <p>Efeson Uliso</p>
            </div>
          </div>

          <div className="links">
           
            <NavLink
              to="/dashboard/users"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Users
            </NavLink>
            <NavLink
              to="/dashboard/addProperty"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Add Properties
            </NavLink>
           
            <NavLink
              to="/dashboard/rented"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Rented Properties
            </NavLink>
            <NavLink
              to="/dashboard/sold"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sold Properties
            </NavLink>
          </div>

          <div className="btn">
            <button onClick={() => navigate("/")}>
              Logout
            </button>
          </div>
        </div>
        
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;