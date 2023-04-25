import React from "react";

import airplaneIcon from "../../../assets/travel-icon-sm.png";
import ticketIcon from "../../../assets/ticket-icon-sm.png";

import styles from "./Gifts.module.css";

const Gifts: React.FC = () => {
  return (
    <div className={styles.prizes}>
      <div className={styles.prizeWrapper}>
        <div className={styles.sideLight}></div>
        <img src={airplaneIcon} alt="airplane icon" />
        <p>The Festival in Malta-ს საგზური</p>
      </div>
      <div className={styles.prizeWrapper}>
        <div className={styles.sideLight}></div>
        <img src={ticketIcon} alt="ticket icon" />
        <p>
          სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The
          Festival in Malta-ს საგზური
        </p>
      </div>
      <div className={styles.prizeWrapper}>
        <div className={styles.sideLight}></div>
        <img src={ticketIcon} alt="ticket icon" />
        <p>
          სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The
          Festival in Malta-ს საგზური
        </p>
      </div>
    </div>
  );
};

export default Gifts;
