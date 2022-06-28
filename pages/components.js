import Card from "../components/card";
import DropNav from "../components/layout/DropNav";
import Navbar from "../components/layout/Navbar/Navbar";
import Logo from "../components/logo/Logo";
import MyMap from "../components/map";
import ServicesCard from "../components/services-card";
import Social from "../components/social/Social";
import { SocialShare, ServiceList } from "../data";

function Components() {
    return (
      <div>
        <br />
        <br />
        <br />
        <h1>Logo</h1>
        <Logo />
        <h1>Nav</h1>
        <Navbar />
        <h1>drop</h1>
        <DropNav />
        <h1>Social</h1>
        <Social type="circle" SocialShare={SocialShare} />
        <Social type="icon" SocialShare={SocialShare} />
        <Card />
        <MyMap />
        {ServiceList?.map((item, index) => (
          <ServicesCard icon={item?.icon} title={item?.title} descriptiop={item?.description} key={index}/>
        ))}
      </div>
    );
}

export default Components;