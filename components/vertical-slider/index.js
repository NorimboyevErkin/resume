import Slider from "react-slick";
import styles from "../../styles/component-styles/vertical-slider-styles/vertical-slider-styles.module.scss";
const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
};

function VerticalSlider({ children }) {
  return (
    <div>
      <Slider {...settings} className={styles.vertivalSliderBox}>
        {children.map((item, index) => (
          <div key={index} className={styles.VerticalSliderItem}>{item}</div>
        ))}
      </Slider>
    </div>
  );
}

export default VerticalSlider;
