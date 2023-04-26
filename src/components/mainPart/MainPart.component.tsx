import { Outlet } from "react-router-dom";

import styles from "./MainPart.module.css";

const MainPart = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default MainPart;
