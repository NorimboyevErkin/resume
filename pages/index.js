import ShowCase from "./home";
import About from "./about";
import Project from "./project";
import BrandLogoCarousel from "../share/brand-logo-carousel";
import Contact from "./contact";
import Services from "./services";

function Home() {
  return (
    <>
      <ShowCase />
      <About />
      <Services />
      <Project />
      <BrandLogoCarousel />
      <Contact />
    </>
  );
}

export default Home;
