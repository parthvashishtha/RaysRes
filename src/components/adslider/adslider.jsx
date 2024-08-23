import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./adslider.css";

import image1 from "./Ad1.jpg";
import image2 from "./Ad2.jpg";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={"true"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
