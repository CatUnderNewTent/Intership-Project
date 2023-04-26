import styles from "./AprilSmallCard.module.css";

import smallIconTicket from "../../../../assets/poker-item-1-ticket-icon.png";

interface Props {
  header: string;
  text: string;
}

const AprilSmallCard = ({ header, text }: Props) => {
  return (
    <div className={styles.smallCardContainer}>
      <div className={styles.smallCardTextWrapper}>
        <p>{header}</p>
        <p className={styles.smallCardText}>{text}</p>
      </div>
      <img
        className={styles.smallCardIcon}
        src={smallIconTicket}
        alt="ticket icon"
      />
    </div>
  );
};

export default AprilSmallCard;
