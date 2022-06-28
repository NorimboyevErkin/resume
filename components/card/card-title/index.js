import styles from "../../../styles/component-styles/card-styles/card-styles.module.scss";

function CardTitle({ title, description, typeColor='black' }) {
  return (
    <div className={styles.CardTitleBox}>
      <p className={styles.CardTitleTitle}>{title}</p>
      <p className={styles.CardTitleDescription}>{description}</p>
      <span
        className={styles.CardTitleBottomBorder}
        style={{ background: `${typeColor}` }}
      ></span>
    </div>
  );
}

export default CardTitle;
