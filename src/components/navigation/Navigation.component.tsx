import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <div className={styles.navigation}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        to={"/"}
        end
      >
        <p className={styles.navDate}>28 ოქტ. - 7 ნოემ.</p>
        <p className={styles.navType}>Cash Games</p>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        to={"new-year-series"}
      >
        <p className={styles.navDate}>10 - 29 დეკ.</p>
        <p className={styles.navType}>New year Series</p>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        to={"final-stage"}
      >
        <p className={styles.navDate}>28 ოქტ. - 7 ნოემ.</p>
        <p className={styles.navType}>Final Stage</p>
      </NavLink>
    </div>
  );
};

export default Navigation;
