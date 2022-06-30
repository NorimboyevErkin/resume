import React, { useContext, useState } from "react";
import { SectionContext } from "../../../context";
import Scrollspy from "react-scrollspy";
import styles from "../../../styles/component-styles/layout-styles/Navbar-styles/navbar-styles.module.scss";
function NavbarItems() {
  const { sectionRefs } = useContext(SectionContext);

  const scrollSection = (section) => {
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Scrollspy
      items={["home", "about", "services", "project", "contact"]}
      currentClassName={styles.activeNav}
      className={styles.MainMenu}
      style={{
        fontWeight: 300,
      }}
      offset={-61}
      onUpdate={(el) => {
        console.log(el);
      }}
    >
      <li
        className={styles.activeNav}
        onClick={() => {
          scrollSection(sectionRefs?.home);
        }}
      >
        <a>Home</a>
      </li>
      <li
        onClick={() => {
          scrollSection(sectionRefs?.about);
        }}
      >
        <a>About</a>
      </li>
      <li
        onClick={() => {
          scrollSection(sectionRefs?.services);
        }}
      >
        <a>Service</a>
      </li>
      <li
        onClick={() => {
          scrollSection(sectionRefs?.project);
        }}
      >
        <a>Project</a>
      </li>
      <li
        onClick={() => {
          scrollSection(sectionRefs?.contact);
        }}
      >
        <a> Contact</a>
      </li>
    </Scrollspy>
  );
}

export default NavbarItems;
