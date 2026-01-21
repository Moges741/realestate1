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
      <div className={styles.hero_search}>
        <input
          type="text"
          name="city"
          placeholder="City"
          // value={filters.city}
        />

        <select
          name="bedrooms"
          // value={filters.bedrooms}
        >
          <option value="">Bedrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3+</option>
        </select>

        <select
          name="bathrooms"
          // value={filters.bathrooms}
        >
          <option value="">Bathrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3+</option>
        </select>

        <input
          type="number"
          name="priceFrom"
          placeholder="$ From"
          // value={filters.priceFrom}
        />

        <input
          type="number"
          name="priceTo"
          placeholder="$ To"
          // value={filters.priceTo}
        />

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              // checked={filters.type === "rent"}
            />
            For Rent
          </label>

          <label>
            <input
              type="checkbox"
              // checked={filters.type === "sale"}
            />
            For Sale
          </label>
        </div>

        <button>Search</button>
      </div>
      <div className={styles.title}>
        <h1>EM Real Estate Your Gateway to Dream Homes</h1>
      </div>
    </div>
  );
};

export default HeroCarousel;
