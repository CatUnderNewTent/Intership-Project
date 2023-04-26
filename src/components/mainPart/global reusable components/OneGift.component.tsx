import styles from "./OnceGift.module.css";

interface Props {
  src: string;
  alt: string;
  text: string;
}

const OneGift = ({ src, alt, text }: Props) => {
  return (
    <div className={styles.prizeWrapper}>
      <div className={styles.sideLight}></div>
      <img src={src} alt={alt} />
      <p>{text}</p>
    </div>
  );
};

export default OneGift;
