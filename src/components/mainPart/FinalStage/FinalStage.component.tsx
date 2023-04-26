import React from "react";

import bannerImage from "../../../assets/final-info-img.jpg";

import styles from "./FinalStage.module.css";
import ServiceCard from "./reusable components/ServiceCard.component";
import AprilSmallCard from "./reusable components/AprilSmallCard.component";
import AprilBigCard from "./reusable components/AprilBigCard.component";
import MysticKeyEvent from "./reusable components/MysticKeyEvent.component";

const FinalStage: React.FC = () => {
  return (
    <div>
      <div className={styles.finalStageContainer}>
        <img
          className={styles.finalStageBannerImage}
          src={bannerImage}
          alt="banner image"
        />
        <p className={styles.festivalDesc}>
          გაემგზავრე The Festival in Malta-ზე!
        </p>
        <p className={styles.festivalDesc}>
          The Festival Series ტურნირების ფარგლებში, ევროპაბეთი უკვე მეორედ
          აძლევს პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
        </p>
        <div className={styles.festivalDate}>
          <div className={styles.sideLight}></div>
          <h5>15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს</h5>
        </div>
        <div className={styles.serviceCardWrapper}>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
      {/* //////////////////////////// */}
      <div className={styles.aprilTournamentPriceContainer}>
        <div className={styles.aprilTournamentPriceHeader}>
          <div className={styles.topLight}></div>
          <h4>მოიგე საგზური 30 აპრილის ტურნირებზე</h4>
        </div>
        <div className={styles.aprilTournamentCardWrapper}>
          <div className={styles.aprilTournamentThreeCard}>
            <AprilSmallCard
              header="„Holdem Grinders”"
              text="C კატეგორიის 1 საგზური"
            />
            <AprilSmallCard
              header="“Cashgame Sharks”"
              text="C კატეგორიის 1 საგზური"
            />
            <AprilSmallCard
              header="“Cashgame Highrollers”"
              text="C კატეგორიის 1 საგზური"
            />
          </div>
          <div className={styles.aprilTournamentTwoCard}>
            <AprilBigCard
              header="„The Festival in Malta, GTD“"
              textOne="B კატეგორიის 1 საგზური"
              textTwo="C კატეგორიის 1 საგზური"
              textThree="*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით."
            />
            <AprilBigCard
              header="„The Festival in Malta, GTD“"
              textOne="B კატეგორიის 1 საგზური"
              textTwo="C კატეგორიის 1 საგზური"
              textThree="*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით."
            />
          </div>
        </div>
        <div className={styles.aprilTournamentRules}>
          <p>
            * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
            Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
          </p>
          <p>
            *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
            ბაი-ინის გადახდით.
          </p>
        </div>
      </div>
      {/* //////////////////// */}
      <div className={styles.mysticalKeyContainer}>
        <div className={styles.mysticalKeyHeader}>
          <div className={styles.topLight}></div>
          <h4>მისტიური გასაღები</h4>
        </div>
        <div className={styles.mysticKeyEventListWrapper}>
          <div className={styles.mysticKeyEventWrapper}>
            <MysticKeyEvent
              num="1"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
            <MysticKeyEvent
              num="1"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
            <MysticKeyEvent
              num="1"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
            <MysticKeyEvent
              num="1"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
            <MysticKeyEvent
              num="1"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
            <MysticKeyEvent
              num="1"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
            <MysticKeyEvent
              num="1"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
            <MysticKeyEvent
              num="1"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
            <MysticKeyEvent
              num="1"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
            <MysticKeyEvent
              num="1"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
          </div>
        </div>
      </div>
      {/* //////////////////// */}
    </div>
  );
};

export default FinalStage;
