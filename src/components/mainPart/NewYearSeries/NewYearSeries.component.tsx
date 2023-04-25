import BoardInfo from "../reusable components/BoardInfo.component";

import styles from "./NewYearSeries.module.css";

import giftIcon from "../../../assets/gift-solid.png";
import chevron from "../../../assets/chevron-down.svg";

import ClockIcon from "../../../assets/clock-icon-2.png";

import BoardList from "../reusable components/BoardList.component";
import Gifts from "../reusable components/Gifts.component";
import RingBanner from "./RingBanner.component";

const NewYearSeries = () => {
  return (
    <div>
      <div className={styles.tournamentContainer}>
        <div className={styles.cardLight}></div>
        <h4>ტურნირები და სატელიტები</h4>
        <div className={styles.events}>
          <div className={styles.eventBanner}>
            <h4>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</h4>
            <div className={styles.clock}>
              <img src={ClockIcon} alt="clock icon" />
              <p>19:00 / 19:30 / 20:00</p>
            </div>
          </div>
          <div className={styles.tournamentDescription}>
            <p>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
            <p>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
            <button>პოკერის ლობი</button>
          </div>
        </div>
      </div>

      {/* //////////////////////////// */}
      <div className={styles.topListBannerWrapper}>
        <div className={styles.topBannerTitleWrapper}>
          <div className={styles.cardLight}></div>
          <h4 className={styles.topBannerTitle}>
            მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით
          </h4>
        </div>
        <div>
          <div className={styles.topTTlistWrapper}>
            <p>ქულების დაგროვების მექანიკა</p>
            <img src={chevron} alt="chevron down icon" />
          </div>
          {/* //////////////////////// */}
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
          <p>
            * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
            სატელიტები
          </p>
        </div>
      </div>
      {/* //////////////////// */}
      <div className={styles.threeBannerContainer}>
        <p className={styles.threeBannerHeader}>
          ყოველდღიური ტურნირები და სატელიტები
        </p>
        <div className={styles.threeBannerImgWrapper}>
          <RingBanner color="brown" />
          <RingBanner color="brown" />
          <RingBanner color="green" />
        </div>
        <p className={styles.threeBannerSum}>
          * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
          The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
          საგზურის მისაღებად.
        </p>
      </div>
      <BoardInfo />
    </div>
  );
};

export default NewYearSeries;
