import styles from "./RingBanner.module.css";

interface Props {
  color: string;
}

const RingBanner = ({ color }: Props) => {
  return (
    <div
      className={
        color === "green"
          ? styles.ringBannerContainerGreen
          : styles.ringBannerContainer
      }
    >
      <div className={styles.bannerTextWrapper}>
        <p className={styles.highRollers}>Omaha Highrollers</p>
        <p className={styles.amount}>40 000₾</p>
      </div>
      <div className={styles.bannerTextWrapper}>
        <p className={styles.xxx}>ბაი-ინი XXX₾</p>
        <p className={color === "green" ? styles.dateGreen : styles.date}>
          27 დეკემბერი
        </p>
      </div>
    </div>
  );
};

export default RingBanner;
