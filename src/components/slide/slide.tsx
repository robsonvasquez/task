import Style from './style.module.css'

import HeroSlider, { Slide, Nav} from "hero-slider";
import i1 from "../../assets/1.jpeg";
import i2 from "../../assets/2.jpeg";
import i3 from "../../assets/3.jpeg";

export default function Slider (){
    return (
        <section className={Style.slide}>
            <HeroSlider
                height="60vh"
                width="100%"
                autoplay
                controller={{
                    initialSlide: 1,
                    slidingDuration: 500,
                    slidingDelay: 100,
                    onSliding: (nextSlide: number) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                    onBeforeSliding: (previousSlide: number, nextSlide: number) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                    onAfterSliding: (nextSlide: number) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide),
                }}
                >
                    
                <Slide
                    label=""
                    background={{
                    backgroundImageSrc: i1,
                    }}
                />

                <Slide
                    label=""
                    background={{
                    backgroundImageSrc: i2,
                    }}                    
                />

                <Slide
                    label=""
                    background={{
                    backgroundImageSrc: i3,
                    }}
                />

                <Nav />
            </HeroSlider>
        </section>
        
    )
}
