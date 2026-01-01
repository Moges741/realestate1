import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Landing/Landing.jsx";
import PropertyDetail from "./Component/Properties/PropertyDetail.jsx";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/property/:id" element={<PropertyDetail />} />

      </Routes>
    </Router>
  );
};
export default Routing;
