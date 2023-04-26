import styles from "./ServiceCard.module.css";

import ticketIcon from "../../../../assets/final-item-ticket-icon.png";
import moneyIcon from "../../../../assets/final-item-money-icon.png";
import hotelIcon from "../../../../assets/final-item-hotel-icon.png";
import tokenIcon from "../../../../assets/final-item-event-icon.png";
import OneServiceCard from "./OneServiceCard.component";

const ServiceCard = () => {
  return (
    <div className={styles.serviceCardContainer}>
      <div className={styles.serviceCardHeader}>
        <div className={styles.topLight}></div>
        <h5>A კატეგორიის საგზურში შედის</h5>
      </div>
      <div className={styles.serviceCardBody}>
        <OneServiceCard
          src={ticketIcon}
          alt="ticket icon"
          text="ორმხრივი ავიაბილეთი"
        />
        <OneServiceCard
          src={tokenIcon}
          alt="token icon"
          text="The Festival in Malta -ს მეინ ივენთის ბაი-ინი"
        />
        <OneServiceCard
          src={tokenIcon}
          alt="token icon"
          text="Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი"
        />
        <OneServiceCard src={hotelIcon} alt="hotel icon" text="სასტუმრო" />
        <OneServiceCard
          src={moneyIcon}
          alt="money icon"
          text="€500 სახარჯი ფული"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
