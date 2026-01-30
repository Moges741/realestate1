import Layout from "../Component/Layout/Layout";
import Footer from "../Component/Layout/Footer/Footer";
// import HeroCarousel from "../Component/Home/HeroCarousel";
// import Properties from "../Component/Properties/Properties";
import { Outlet } from "react-router";
import { useGetSession } from "../page/auth/useSession";

const Landing = () => {
    const { data } = useGetSession();
    const role = data?.profile?.role;
  
  
  return (
    <Layout>
      {/* <HeroCarousel />
      <Properties /> */}
      <Outlet />
      {role !== "admin" && <Footer />}
    </Layout>
  );
};

export default Landing;
