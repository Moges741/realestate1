// import Properties from "../Properties/Properties"
import ChooseUs from "./ChooseUs"
import HeroCarousel from "./HeroCarousel"
import HomeDescription from "./HomeDescription"
import TestmonialSlider from "./TestmonialSlider"

function Home() {
    return (
        <div>
            <HeroCarousel />
            <HomeDescription />
            <ChooseUs />
            <TestmonialSlider />
            {/* <Properties /> */}
        </div>
    )
}

export default Home
