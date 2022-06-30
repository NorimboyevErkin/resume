import Components from "../../components";
import BrandLogo from "../../data/brands.json";
import styles from "../../styles/share-styles/brand-carousel-styles/brand-logo-carousel.module.scss";

function BrandLogoCarousel({ ...others }) {
  return (
    <div className={styles.BrandLogoBox} {...others}>
      <div className="container">
        <Components typeComponent="carousel">
          {BrandLogo.map((item, index) => {
            return (
              <div key={index} className={styles.BrandLogoItem}>
                <img src={item?.image} alt={item?.name} />
              </div>
            );
          })}
        </Components>
      </div>
    </div>
  );
}

export default BrandLogoCarousel;
