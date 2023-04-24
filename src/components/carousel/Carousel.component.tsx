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
      <Swiper
        resistanceRatio={0}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          650: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <div className={styles.imgContainer}>
            <img src={hundredImg} alt="hundred plus bonus image" />
            <div className={styles.bonusImgText}>
              <h5>მიიღე 300% ქეშბ…</h5>
              <p>retrieve 300% bet amount as real mone…</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgContainer}>
            <img src={carImg} alt="car image" />
            <div className={styles.carImgText}>
              <h5>მალე</h5>
              <p>retrieve 300% bet amount as real money…</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgContainer}>
            <img src={playImg} alt="jackpot image" />
            <div className={styles.jackpotImgText}>
              <h5>მოიგე ჯაკპოტი</h5>
              <p>retrieve 300% bet amount as real money…</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgContainer}>
            <img src={hundredImg} alt="hundred plus bonus image" />
            <div className={styles.bonusImgText}>
              <h5>მიიღე 300% ქეშბ…</h5>
              <p>retrieve 300% bet amount as real mone…</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgContainer}>
            <img src={carImg} alt="car image" />
            <div className={styles.carImgText}>
              <h5>მალე</h5>
              <p>retrieve 300% bet amount as real money…</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgContainer}>
            <img src={playImg} alt="jackpot image" />
            <div className={styles.jackpotImgText}>
              <h5>მოიგე ჯაკპოტი</h5>
              <p>retrieve 300% bet amount as real money…</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
