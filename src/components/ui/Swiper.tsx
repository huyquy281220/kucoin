import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/swiper-bundle.min.css";

interface CustomSwiperProps extends SwiperProps {
    slides: Array<any>;
}

function CustomSwiper({ slides, ...props }: CustomSwiperProps) {
    return (
        <Swiper {...props}>
            {slides.map((item, index) => {
                return <SwiperSlide key={`slide-${index}`}>{item}</SwiperSlide>;
            })}
        </Swiper>
    );
}

export default CustomSwiper;
