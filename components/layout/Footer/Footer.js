import { SocialShare } from "../../../data/index";
import Social from "../../social";
import styles from "../../../styles/component-styles/layout-styles/footer-styles/footer-styles.module.scss";
import Logo from "../../logo";

function Footer() {
  return (
    <div className={styles.FooterBox}>
      <div className="container">
        <div className={styles.FooterFlex}>
          <div className={styles.FooterFlexItems}>
            <Logo className={styles.FooterLogo} />
          </div>
          <div className={styles.FooterFlexItems}>
            <Social
              type="circle"
              SocialShare={SocialShare}
              className={styles.FooterSocial}
            />
          </div>
          <div className={styles.FooterFlexItems}>
            <p className={styles.FooterBy}>Copyright © 2022 Erkin.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
