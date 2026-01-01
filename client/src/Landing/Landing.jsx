import Layout from "../Component/Layout/Layout";
import Footer from "../Component/Layout/Footer/Footer";
import HeroCarousel from "../Component/Home/HeroCarousel";

const Landing = () => {
  return (
    <Layout>
      <HeroCarousel />
      <Footer />
    </Layout>
  );
};

export default Landing;
