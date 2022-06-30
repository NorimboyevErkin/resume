import Social from "../../social";
import React, { useState } from "react";
import Logo from "../../logo";
import styles from "../../../styles/component-styles/layout-styles/Header-styles/header-styles.module.scss";
import { SocialShare } from "../../../data";
import DropNav from "../DropNav";
import NavbarItems from "../Navbar";

function Header() {
  const [bgNav, setbgNav] = useState(false);
  const func = () => {
    if (typeof window !== "undefined") {
      window.scrollY > 50 ? setbgNav(true): setbgNav(false)
    }
  };
  globalThis.window?.addEventListener("scroll", func);
  return (
    <div
      className={
        bgNav ? styles.HeaderBox + " " + styles.stickyNav : styles.HeaderBox
      }
    >
      <div className="container">
        <div className={styles.HeaderContainer}>
          <div className={styles.HeaderLeftBox}>
            <Logo />
            <div className={styles.HeaderNavbarBox}>
              <NavbarItems/>
            </div>
          </div>
          <Social type="icon" SocialShare={SocialShare} />
          <DropNav />
        </div>
      </div>
    </div>
  );
}

export default Header;
