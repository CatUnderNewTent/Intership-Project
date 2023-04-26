import airplaneIcon from "../../../assets/travel-icon-sm.png";
import ticketIcon from "../../../assets/ticket-icon-sm.png";

import styles from "./Gifts.module.css";
import OneGift from "./OneGift.component";

const Gifts = () => {
  return (
    <div className={styles.prizes}>
      <OneGift
        src={airplaneIcon}
        alt="airplane icon"
        text="The Festival in Malta-ს საგზური"
      />
      <OneGift
        src={ticketIcon}
        alt="ticket icon"
        text="სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The
        Festival in Malta-ს საგზური"
      />
      <OneGift
        src={ticketIcon}
        alt="ticket icon"
        text="სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The
        Festival in Malta-ს საგზური"
      />
    </div>
  );
};

export default Gifts;
