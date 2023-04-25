import React from "react";

import styles from "./Authentication.module.css";

import logo from "../../assets/logo.png";

const Authentication: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.auth}>
        <div className={styles.signUp}>
          <button>Sign up</button>
        </div>
        <div className={styles.signIn}>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
