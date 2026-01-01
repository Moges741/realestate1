import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from "../Home/Data/data.js";
import styles from "./carousel.module.css";

const HeroCarousel = () => {
  return (
    <div className={styles.heroContainer}>
      <Carousel
        autoPlay={true}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={2000}
      >
        {images.map((slide) => (
          <div className={styles.slide}>
            <img src={slide} alt="Hero Slide" />

            </div>
          // </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
