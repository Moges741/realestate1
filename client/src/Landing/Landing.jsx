import Layout from "../Component/Layout/Layout";
import Footer from "../Component/Layout/Footer/Footer";
// import HeroCarousel from "../Component/Home/HeroCarousel";
// import Properties from "../Component/Properties/Properties";
import { Outlet } from "react-router";

const Landing = () => {
  return (
    <Layout>
      {/* <HeroCarousel />
      <Properties /> */}
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default Landing;
