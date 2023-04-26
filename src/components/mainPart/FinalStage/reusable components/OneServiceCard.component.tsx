import styles from "./OncServiceCard.module.css";

interface Props {
  src: string;
  alt: string;
  text: string;
}

const OneServiceCard = ({ text, alt, src }: Props) => {
  return (
    <div className={styles.serviceCardSinglePart}>
      <img src={src} alt={alt} />
      <p>{text}</p>
    </div>
  );
};

export default OneServiceCard;
