import React, { useContext, useState } from "react";
import styles from "../../../styles/component-styles/layout-styles/Navbar-styles/navbar-styles.module.scss";
import { SectionContext } from "../../../context";
function Navbar() {
  const { sectionRefs } = useContext(SectionContext);
  // const [active, setactive] = useState("home");
  // const scrollBrowserScreen = (section) => {
  //   let callback = function (entries) {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting === true) {
  //         console.log(entry, "entry");
  //         if (entry.target === sectionRefs.home) setactive("home");
  //         else if (entry.target === sectionRefs.about) setactive("about");
  //         else if (entry.target === sectionRefs.services) setactive("services");
  //         else if (entry.target === sectionRefs.project) setactive("project");
  //         else if (entry.target === sectionRefs.contact) setactive("contact");
  //       }
  //     });
  //   };

  //   let options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.6,
  //   };

  //  const observer = new IntersectionObserver(callback, options);
  //   for (const key in sectionRefs) {
  //     if (typeof sectionRefs[key] !== "undefined") {
  //       observer.observe(sectionRefs[key]);
  //     }
  //   }
  // };

  // if (typeof window !== "undefined") {
  //   window?.addEventListener("scroll", scrollBrowserScreen);
  // }

  const scrollSection = (section) => {
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className={styles.MainMenuNav}>
      <ul className={styles.MainMenu}>
        <li
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
      </ul>
    </nav>
  );
}

export default Navbar;
