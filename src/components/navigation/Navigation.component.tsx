import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <div className={styles.navigation}>
      <Link to={"cash-games"}>Cash Games</Link>
      <Link to={"new-year-series"}>New year Series</Link>
      <Link to={"final-stage"}>Final Stage</Link>
    </div>
  );
};

export default Navigation;
