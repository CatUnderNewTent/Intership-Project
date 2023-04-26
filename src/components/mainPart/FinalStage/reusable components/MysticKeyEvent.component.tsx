import styles from "./MysticKeyEvent.module.css";

interface Props {
  num: string;
  text: string;
}

const MysticKeyEvent = ({ num, text }: Props) => {
  return (
    <div className={styles.EventWrapper}>
      <p className={styles.EventNumber}>{num}</p>
      <p className={styles.EventText}>{text}</p>
    </div>
  );
};

export default MysticKeyEvent;
