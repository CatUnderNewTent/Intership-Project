import chevron from "../../assets/chevron-down.svg";
import styles from "./Rules.module.css";

const Rules = () => {
  return (
    <div className={styles.rulesWrapper}>
      <h4 className={styles.rulesTitle}>წესები და პირობები</h4>
      <div className={styles.rulesContainer}>
        <div className={styles.rules}>
          <p>როდის იწყება და რა ფორმატით გაიმართება აქცია </p>
          <img src={chevron} alt="chevron dwon" />
        </div>
        <div className={styles.rules}>
          <p>როგორ მივიღო აქციაში მონაწილეობა?</p>
          <img src={chevron} alt="chevron dwon" />
        </div>
        <div className={styles.rules}>
          <p>სხვადასხვა</p>
          <img src={chevron} alt="chevron dwon" />
        </div>
      </div>
    </div>
  );
};

export default Rules;
