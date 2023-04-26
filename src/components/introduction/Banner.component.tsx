import styles from "./Banner.module.css";

import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <img className={styles.bannerImg} src={banner} alt="banner photo" />
    </div>
  );
};

export default Banner;
