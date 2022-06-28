import Carousel from "../../components/carousel";
import BrandLogo from "../../data/brands.json";
import styles from "../../styles/share-styles/brand-carousel-styles/brand-logo-carousel.module.scss";

function BrandLogoCarousel({ ...others }) {
  return (
    <div className={styles.BrandLogoBox} {...others}>
      <div className="container">
        <Carousel>
          {BrandLogo.map((item, index) => {
            return (
              <div key={index} className={styles.BrandLogoItem}>
                <img src={item?.image} alt={item?.name} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default BrandLogoCarousel;
