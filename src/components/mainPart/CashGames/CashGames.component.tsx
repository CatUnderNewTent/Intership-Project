import React from "react";

import exampleIcon from "../../../assets/example-icon.png";
import giftIcon from "../../../assets/gift-solid.png";

import styles from "./CrashGames.module.css";
import BoardList from "./BoardList.component";
import Gifts from "./Gifts.component";
import BoardInfo from "./BoardInfo.component";

const CashGames: React.FC = () => {
  return (
    <div>
      <div className={styles.boardContainer}>
        <div className={styles.boardHeader}>
          <div className={styles.headerLight}></div>
          <h4>1₾ რეიქი = 1 ქულას</h4>
        </div>
        <div className={styles.topListContainer}>
          <div className={styles.titleAndLogoContainer}>
            <h5>TOP20 ლიდერბორდი ჰოლდემში</h5>
            <img src={exampleIcon} alt="example icon" />
          </div>
          <div className={styles.listDesc}>
            <div
              className={`${styles.listWrapper} ${styles.listDescAndNumPadd}`}
            >
              <p>ადგილი</p>
            </div>
            <div className={styles.listWrapper}>
              <img className={styles.giftIcon} src={giftIcon} alt="gift icon" />
              <p>ვაუჩერი</p>
            </div>
            <div className={styles.listWrapper}>
              <p>პრიზი</p>
            </div>
          </div>
          <div className={styles.listComponentContainer}>
            <BoardList />
            <BoardList />
            <BoardList />
            <BoardList />
            <BoardList />
            <BoardList />
            <BoardList />
            <BoardList />
            <BoardList />
            <BoardList />
          </div>
        </div>
        <Gifts />
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
