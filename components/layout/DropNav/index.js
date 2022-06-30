import React, { useRef, useState, useContext } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { SectionContext } from "../../../context";
import styles from "../../../styles/component-styles/layout-styles/DropNav-styles/dropNav-styles.module.scss";
import NavbarItems from "../Navbar";

function DropNav() {
  const { sectionRefs } = useContext(SectionContext);
  const [open, setopen] = useState(false);
  const navRef = useRef();
  const shadowRef = useRef();

  const openNav = () => {
    navRef.current.style.right = "0";
    shadowRef.current.style.display = "block";
  };
  const closeNav = () => {
    navRef.current.style.right = "-100%";
    shadowRef.current.style.display = "none";
  };

  const scrollSection = (section) => {
    if (typeof document !== "undefined") {
      section?.scrollIntoView({ behavior: "smooth" });
      closeNav();
    }
  };

  return (
    <>
      <div
        className={styles.DropShadow}
        ref={shadowRef}
        onClick={() => closeNav()}
      ></div>
      <div className={styles.DropNavBox}>
        <div className={styles.BurgerBox}>
          <button className={styles.Burger} onClick={() => openNav()}>
            <HiOutlineMenuAlt3 />
          </button>
        </div>
        <nav className={styles.DropMenuNav} ref={navRef}>
          <div className={styles.BurgerBox} style={{ padding: "20px 30px" }}>
            <button className={styles.Burger} onClick={() => closeNav()}>
              <HiOutlineX />
            </button>
          </div>
          <NavbarItems />
        </nav>
      </div>
    </>
  );
}

export default DropNav;
