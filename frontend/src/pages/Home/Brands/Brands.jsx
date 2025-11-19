import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import amazonLogo from "../../../assets/brands/amazon.png";
import amazonVectorLogo from "../../../assets/brands/amazon_vector.png";
import casioLogo from "../../../assets/brands/casio.png";
import moonstarLogo from "../../../assets/brands/moonstar.png";
import randstadLogo from "../../../assets/brands/randstad.png";
import starLogo from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogos = [
  amazonLogo,
  amazonVectorLogo,
  casioLogo,
  moonstarLogo,
  randstadLogo,
  starLogo,
  startPeople,
]

const Brands = () => {
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      autoplay={
        { delay: 1000,
          disableOnInteraction: false,
        }
      }
      modules={[Autoplay]}
    >
      {brandLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt={`Brand Logo ${index + 1}`}  />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
