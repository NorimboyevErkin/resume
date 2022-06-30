import React, { useContext, useEffect, useRef } from "react";
import styles from "../../styles/pages-styles/home-styles/home-styles.module.scss";
import { SectionContext } from "../../context";
import AOS from "aos";
import "aos/dist/aos.css";
import Components from "../../components";

function ShowCase({...others}) {
    const { sectionRefs } = useContext(SectionContext);
    const homeSection = useRef();
    useEffect(() => {
      sectionRefs.home = homeSection.current;
       AOS.init({});
    }, []);
  return (
    <>
      <div
        className={styles.showCaseBox}
        ref={homeSection}
        id="home"
        {...others}
      >
        <div style={{ position: "relative", width: "100%" }}>
          <div className="container">
            <Components typeComponent="rain-animation" />
            <div
              className={styles.ShowCaseInfo}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <p>Welcome to my world !</p>
              <h1>Hello I&apos;m Erkin</h1>
              <Components typeComponent='vertical-slider'>
                <h1>Wep developer</h1>
                <h1>UX , UI designer</h1>
              </Components>
              <h1>From Uzbekistan</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowCase;
