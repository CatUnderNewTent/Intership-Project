import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import carImg from "../../assets/car-img.png";
import hundredImg from "../../assets/hundred-plus.png";
import playImg from "../../assets/play-img.png";

import styles from "./Carousel.module.css";
import "swiper/css";

const Carousel: React.FC = () => {
  return (
    <div className={styles.carousel}>
      <h4>მსგავსი აქციები</h4>
      <Swiper resistanceRatio={0} spaceBetween={20} slidesPerView={2.2}>
        <SwiperSlide>
          <img src={hundredImg} alt="hundred plus bonus image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carImg} alt="car image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={playImg} alt="jackpot image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hundredImg} alt="hundred plus bonus image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carImg} alt="car img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={playImg} alt="jackpot image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
