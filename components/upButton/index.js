import React, { useState, useContext } from "react";
import Fab from "@mui/material/Fab";
import { BiChevronUp } from "react-icons/bi";
import styles from "../../styles/component-styles/up-button-styles/up-button-styles.module.scss";
import { SectionContext } from "../../context";
function UpButton() {
  const [upButton, setupButton] = useState(false);
  const { sectionRefs } = useContext(SectionContext);
  SectionContext
  const scrollSection = (section) => {
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const func = () => {
    if (typeof window !== "undefined") {
      window.scrollY > 100 ? setupButton(true) : setupButton(false);
    }
  };
  globalThis.window?.addEventListener("scroll", func);
  return (
    <div
      className={styles.UpButtonBox}
      style={upButton ? null : { display: "none" }}
      onClick={() => {
        scrollSection(sectionRefs?.home);
      }}
    >
      <Fab color="primary" aria-label="add" className={styles.UpButtonfab}>
        <BiChevronUp style={{ fontSize: "2rem" }} />
      </Fab>
    </div>
  );
}

export default UpButton;
