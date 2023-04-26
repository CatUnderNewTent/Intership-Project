import styles from "./BoardList.module.css";

const BoardList = () => {
  return (
    <div className={styles.topList}>
      <div className={`${styles.listWrapper} ${styles.listDescAndNumPadd}`}>
        <div className={styles.listNum}>
          <p>1</p>
        </div>
      </div>
      <div className={styles.listWrapper}>
        <p>1 500 ₾</p>
      </div>
      <div className={styles.listWrapper}>
        <p>A კატეგორიის საგზური</p>
      </div>
    </div>
  );
};

export default BoardList;
