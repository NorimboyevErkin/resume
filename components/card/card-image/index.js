import styles from "../../../styles/component-styles/card-styles/card-styles.module.scss";
function CardImage({image}) {
  return (
    <div
      className={styles.CardImageBox}
      style={{ backgroundImage: `url(${image.src})`}}
    ></div>
  );
}

export default CardImage;
