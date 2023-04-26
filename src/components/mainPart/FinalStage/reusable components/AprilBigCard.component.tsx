import styles from "./AprilBigCard.module.css";

import bigIconTicket from "../../../../assets/poker-item-1-ticket-icon.png";

interface Props {
  header: string;
  textOne: string;
  textTwo: string;
  textThree: string;
}

const AprilBigCard = ({ header, textOne, textTwo, textThree }: Props) => {
  return (
    <div className={styles.bigCardContainer}>
      <div className={styles.bigCardTextWrapper}>
        <p className={styles.bigCardHeader}>{header}</p>
        <p className={styles.bigCardText}>{textOne}</p>
        <p className={styles.bigCardText}>{textTwo}</p>
        <p className={styles.bigCardText}>{textThree}</p>
      </div>
      <img
        className={styles.bigCardIcon}
        src={bigIconTicket}
        alt="ticket icon"
      />
    </div>
  );
};

export default AprilBigCard;
