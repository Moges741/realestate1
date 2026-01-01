import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Landing/Landing.jsx";
import PropertyDetail from "./Component/Properties/PropertyDetail.jsx";
import Login from "./page/Login/Login.jsx";
import SignUp from "./page/Signup/Signup.jsx";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Router>
  );
};
export default Routing;
