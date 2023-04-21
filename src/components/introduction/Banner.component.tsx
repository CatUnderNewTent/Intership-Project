import React from "react";

import styles from "./Banner.module.css";

const Banner: React.FC = () => {
  return (
    <div className={styles.background}>
      <img src="" alt="" />
      <div>
        <h2>სლოტები 10 სექტემბერი - 7 ნოემბერი</h2>
        <h2>მოიპოვე 10 საგზური</h2>
        <h2>მოხვდი პოკერის ფესტივალზე</h2>
      </div>
    </div>
  );
};

export default Banner;
