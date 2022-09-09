import { useEffect } from "react";
import CardImage from "./card-image";
import CardTitle from "./card-title";
import AOS from "aos";
import styles from "../../styles/component-styles/card-styles/card-styles.module.scss";
import "aos/dist/aos.css";

function Card({ data }) {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <a
      href={data.to}
      className={styles.CardBox}
      data-aos="fade-up"
      data-aos-offset="80"
    >
      <CardImage image={data?.image} />
      <CardTitle
        title={data?.title}
        description={data?.description}
        typeColor={data?.typeColor}
      />
    </a>
  );
}

export default Card;
