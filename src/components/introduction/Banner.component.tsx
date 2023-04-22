import React from "react";

import styles from "./Banner.module.css";

import banner from "../../assets/banner.jpg";

const Banner: React.FC = () => {
  return (
    <div>
      <div>
        <img className={styles.bannerImg} src={banner} alt="banner photo" />
      </div>
      <div className={styles.bannerDesc}>
        <p>
          <span>სლოტები</span> 10 სექტემბერი - 7 ნოემბერი
        </p>
        <h4>მოიპოვე 10 საგზურიდან ერთ-ერთი</h4>
        <p>მოხვდი პოკერის ფესტივალზე მალტაში</p>
      </div>
    </div>
  );
};

export default Banner;
