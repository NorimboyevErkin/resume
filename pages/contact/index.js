import React, { useContext, useEffect, useRef } from "react";
import MyForm from "../../share/form";
import { SectionContext } from "../../context";
import styles from "../../styles/pages-styles/contact-styles/contact-styles.module.scss";
import Components from "../../components";

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
      id="contact"
      {...others}
    >
      <div className="container">
        <h2 className="title">Contact</h2>
        <div className={styles.ContactGrid}>
          <Components typeComponent="map" />
          <MyForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
