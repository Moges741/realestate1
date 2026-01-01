import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Landing/Landing.jsx";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default Routing;
