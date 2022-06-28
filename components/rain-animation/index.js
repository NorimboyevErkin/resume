import styles from "../../styles/component-styles/rain-animation-styles/rain-animation-styles.module.scss";
function RainAnimation() {
  return (
    <div className={styles.RainAnimationBox}>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
    </div>
  );
}

export default RainAnimation;
