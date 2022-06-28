import React, { useContext, useEffect, useRef } from "react";
import MyMap from "../../components/map";
import MyForm from "../../share/form";
import { SectionContext } from "../../context";
import styles from "../../styles/pages-styles/contact-styles/contact-styles.module.scss";

function Contact({ ...others }) {
  const { sectionRefs } = useContext(SectionContext);
  const contactSection = useRef();
  useEffect(() => {
    sectionRefs.contact = contactSection.current;
  }, []);
  return (
    <div
      className={styles.ContactBox + " " + "scrollIntoViewMinusNavHeight"}
      ref={contactSection}
      {...others}
    >
      <div className="container">
        <h2 className="title">Contact</h2>
        <div className={styles.ContactGrid}>
          <MyMap />
          <MyForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
