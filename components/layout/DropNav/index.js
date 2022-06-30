import React, { useRef, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import styles from "../../../styles/component-styles/layout-styles/DropNav-styles/dropNav-styles.module.scss";
import NavbarItems from "../Navbar";

function DropNav() {
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
          <NavbarItems onFinish={closeNav} />
        </nav>
      </div>
    </>
  );
}

export default DropNav;
