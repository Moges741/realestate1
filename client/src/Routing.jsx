import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Landing/Landing.jsx";
import PropertyDetail from "./Component/Properties/PropertyDetail.jsx";
import Login from "./page/Login/Login.jsx";
import SignUp from "./page/Signup/Signup.jsx";
import CheckEmail from "./page/Signup/CheckEmail.jsx";
import Dashboard from "./page/Dashboard/Dashboard.jsx";
import User from "./page/Dashboard/User.jsx";
import Booked from "./page/Dashboard/Booked.jsx";
// import Properties from "./page/Dashboard/Properties.jsx";
import Rented from "./page/Dashboard/Rented.jsx";
import Sold from "./page/Dashboard/Sold.jsx";
import Profile from "./page/Profile/Profile.jsx";
import Home from "./Component/Home/Home.jsx";
import ProfileLayout from "./page/Profile/ProfileLayout.jsx";
import Update from "./page/Profile/Update.jsx";
import AddProperties from "./page/Dashboard/AddProperties.jsx";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Landing />}>
          <Route path="/" element={<Home />} />
          <Route path="property/:id" element={<PropertyDetail />} />

          <Route path="profile" element={<ProfileLayout />} >
          <Route index element = {<Profile />} />
          <Route path="update" element={<Update />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="users" element={<User />} />
            <Route path="booked" element={<Booked />} />
            <Route path="addProperty" element={<AddProperties />} />
            <Route path="rented" element={<Rented />} />
            <Route path="sold" element={<Sold />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="check-email" element={<CheckEmail />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};
export default Routing;
