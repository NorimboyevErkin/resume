import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Link from "next/link";
import { BiChevronUp } from "react-icons/bi";
import styles from "../../styles/component-styles/up-button-styles/up-button-styles.module.scss";
function UpButton() {
  const [upButton, setupButton] = useState(false);
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
    >
      <Link href="#">
        <Fab color="primary" aria-label="add" className={styles.UpButtonfab}>
          <BiChevronUp style={{ fontSize: "2rem" }} />
        </Fab>
      </Link>
    </div>
  );
}

export default UpButton;
