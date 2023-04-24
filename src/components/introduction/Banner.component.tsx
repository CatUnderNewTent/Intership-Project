import React from "react";

import styles from "./Banner.module.css";

import banner from "../../assets/banner.jpg";

const Banner: React.FC = () => {
  return (
    <div>
      <img className={styles.bannerImg} src={banner} alt="banner photo" />
    </div>
  );
};

export default Banner;
