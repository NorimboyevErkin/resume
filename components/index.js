import Card from "./card";
import Carousel from "./carousel";
import Layout from "./layout";
import Logo from "./logo";
import MyMap from "./map";
import RainAnimation from "./rain-animation";
import ServicesCard from "./services-card";
import Social from "./social";
import TabPanel from "./tabs";
import UpButton from "./upButton";
import VerticalSlider from "./vertical-slider";

function Components({ typeComponent, children, ...others }) {
  switch (typeComponent) {
    case "layout":
      return <Layout {...others}>{children}</Layout>;
    case "logo":
      return <Logo {...others} />;
    case "social":
      return <Social {...others} />;
    case "card":
      return <Card {...others} />;
    case "carousel":
      return <Carousel {...others}>{children}</Carousel>;
    case "map":
      return <MyMap {...others} />;
    case "services-card":
      return <ServicesCard {...others} />;
    case "tabs-panel":
      return <TabPanel {...others}>{children}</TabPanel>;
    case "up-button":
      return <UpButton {...others} />;
    case "vertical-slider":
      return <VerticalSlider {...others}>{children}</VerticalSlider>;
    case "rain-animation":
      return <RainAnimation {...others} />;
    default:
      break;
  }
}

export default Components;
