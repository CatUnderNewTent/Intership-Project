import React from "react";

import styles from "./Authentication.module.css";

import logo from "../../assets/logo.png";

const Authentication: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.auth}>
        <div className={styles.signUp}>
          <p>Sign up</p>
        </div>
        <div className={styles.signIn}>
          <p>Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
