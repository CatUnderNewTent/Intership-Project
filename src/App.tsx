import Authentication from "./components/authentication/Authentication.component.tsx";
import Carousel from "./components/carousel/Carousel.component.tsx";
import Banner from "./components/introduction/Banner.component.tsx";
import MainPart from "./components/mainPart/MainPart.component.tsx";
import Navigation from "./components/navigation/Navigation.component.tsx";
import Rules from "./components/rules/Rules.component.tsx";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.cardBackground}>
      <Authentication />
      <Banner />
      <div className={styles.card}>
        <Navigation />
        <MainPart />
        <Rules />
        <Carousel />
      </div>
      <div className={styles.playBtn}>
        <p>ითამაშე</p>
      </div>
    </div>
  );
}

export default App;
