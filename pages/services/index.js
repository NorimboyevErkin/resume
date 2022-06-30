import React, { useContext, useEffect, useRef } from "react";
import { ServiceList } from "../../data";
import { SectionContext } from "../../context";
import styles from "../../styles/pages-styles/services-styles/services-styles.module.scss";
import Components from "../../components";
function Services({ ...others }) {
  const { sectionRefs } = useContext(SectionContext);
  const servicesSection = useRef();
  useEffect(() => {
    sectionRefs.services = servicesSection.current;
  }, []);
  return (
    <div
      className={styles.ServicesBox + " " + "scrollIntoViewMinusNavHeight"}
      ref={servicesSection}
      id="services"
      {...others}
    >
      <div className="container">
        <h2 className="title">Services</h2>
        <div className={styles.ServicesGrid}>
          {ServiceList?.map((item, index) => (
            <Components
              typeComponent="services-card"
              key={index}
              icon={item?.icon}
              title={item?.title}
              descriptiop={item?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
