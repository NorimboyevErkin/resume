import { useEffect } from "react";
import styles from "../../styles/component-styles/services-card-styles/services-card-styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
function ServicesCard({ icon, title, descriptiop }) {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className={styles.ServicesCardBox}
      data-aos="fade-up"
      data-aos-offset="100"
    >
      <div className={styles.ServicesCardIcon}>{icon}</div>
      <div className={styles.ServicesCardTitle}>
        <h3>{title}</h3>
      </div>
      <div className={styles.ServicesCardDescriptiop}>
        <p>{descriptiop}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
