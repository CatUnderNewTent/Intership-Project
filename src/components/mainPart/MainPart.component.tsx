import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./MainPart.module.css";

const MainPart: React.FC = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default MainPart;
