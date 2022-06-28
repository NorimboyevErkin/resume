import styles from "../../styles/component-styles/social-styles/social-styles.module.scss";
import Tooltip from "@mui/material/Tooltip";
function Social({ type, SocialShare }) {
  return (
    <div className={styles.SocialBox}>
      <ul className={styles.socialShare}>
        {SocialShare.map((value, i) => (
          <Tooltip title={value?.name} key={i}>
            <li
              className={
                type == "circle" ? styles.circleSocial : styles.iconSocial
              }
            >
              <a href={`${value?.link}`}>{value?.Social}</a>
            </li>
          </Tooltip>
        ))}
      </ul>
    </div>
  );
}

export default Social;
