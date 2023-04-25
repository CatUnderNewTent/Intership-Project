import React from "react";

import styles from "./CrashGames.module.css";

import BoardInfo from "../reusable components/BoardInfo.component";
import ListsAndGifts from "./ListsAndGifts.component";

const CashGames: React.FC = () => {
  return (
    <div>
      <div className={styles.boardContainer}>
        <div className={styles.boardHeader}>
          <div className={styles.headerLight}></div>
          <h4>1₾ რეიქი = 1 ქულას</h4>
        </div>
        <ListsAndGifts />
        <ListsAndGifts />
        <div className={styles.pokerLobby}>
          <p>
            * ლიდერბორდის შედეგები განახლდება <span>პოკერის ლობიში</span>
          </p>
        </div>
      </div>
      <BoardInfo />
    </div>
  );
};

export default CashGames;
