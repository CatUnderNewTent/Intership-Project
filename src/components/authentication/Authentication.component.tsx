import React from "react";

import styles from "./Authentication.module.css";

const Authentication: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>LOGO</div>
      <div className={styles.auth}>
        <h4>Sign up</h4>
        <h4>Sign in</h4>
      </div>
    </div>
  );
};

export default Authentication;
