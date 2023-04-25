import React from "react";

import styles from "./BoardInfo.module.css";

const BoardInfo: React.FC = () => {
  return (
    <div className={styles.boardInfoWrapper}>
      <div></div>
      <h4>
        დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side
        ლიდერბორდი
      </h4>
      <p>
        * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.
      </p>
    </div>
  );
};

export default BoardInfo;
