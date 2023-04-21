import Authentication from "./components/authentication/Authentication.component.tsx";
import Carousel from "./components/carousel/Carousel.component.tsx";
import Banner from "./components/introduction/Banner.component.tsx";
import MainPart from "./components/mainPart/MainPart.component.tsx";
import Navigation from "./components/navigation/Navigation.component.tsx";
import Rules from "./components/rules/Rules.component.tsx";

function App() {
  return (
    <>
      <Authentication />
      <Banner />
      <Navigation />
      <MainPart />
      <Rules />
      <Carousel />
    </>
  );
}

export default App;
