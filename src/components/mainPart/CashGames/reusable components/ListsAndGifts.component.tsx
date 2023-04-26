import React from "react";

import exampleIcon from "../../../../assets/example-icon.png";
import giftIcon from "../../../../assets/gift-solid.png";

import styles from "./ListAndGifts.module.css";
import BoardList from "../../global reusable components/BoardList.component";
import Gifts from "../../global reusable components/Gifts.component";

const ListsAndGifts: React.FC = () => {
  return (
    <>
      <div className={styles.topListContainer}>
        <div className={styles.titleAndLogoContainer}>
          <h5>TOP20 ლიდერბორდი ჰოლდემში</h5>
          <img src={exampleIcon} alt="example icon" />
        </div>
        <div className={styles.listDesc}>
          <div className={`${styles.listWrapper} ${styles.listDescAndNumPadd}`}>
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
    </>
  );
};

export default ListsAndGifts;
