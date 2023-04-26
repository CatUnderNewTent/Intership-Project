import Authentication from "./components/authentication/Authentication.component.tsx";
import Carousel from "./components/carousel/Carousel.component.tsx";
import Banner from "./components/introduction/Banner.component.tsx";
import MainPart from "./components/mainPart/MainPart.component.tsx";
import Navigation from "./components/navigation/Navigation.component.tsx";
import Rules from "./components/rules/Rules.component.tsx";

import styles from "./App.module.css";

import closeIcon from "./assets/close-icon.png";

function App() {
  return (
    <div className={styles.cardBackground}>
      <div className={styles.dateAndIcon}>
        <p className={styles.date}>
          <span>სლოტები</span> 10 სექტემბერი - 7 ნოემბერი
        </p>
        <img src={closeIcon} alt="close icon" className={styles.icon} />
      </div>
      <Authentication />
      <Banner />
      <div className={styles.card}>
        <Navigation />
        <MainPart />
        <Rules />
        <Carousel />
      </div>
      <div className={styles.playBtn}>
        <button>ითამაშე</button>
      </div>
    </div>
  );
}

export default App;
