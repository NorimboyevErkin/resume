import React, { useContext, useEffect, useRef } from "react";
import Components from "../../components";
import { SectionContext } from "../../context";
import {portfolio} from "../../data/project";
import styles from "../../styles/pages-styles/project-styles/project-styles.module.scss";

function Project({ ...others }) {
  const { sectionRefs } = useContext(SectionContext);
  const projectSection = useRef();
  useEffect(() => {
    sectionRefs.project = projectSection.current;
  }, []);

  return (
    <div
      className={styles.ProjectBox + " " + "scrollIntoViewMinusNavHeight"}
      ref={projectSection}
      id="project"
      {...others}
    >
      <div className="container">
        <h2 className="title">My projects</h2>
        <div className={styles.ProjectGrid}>
          {portfolio.map((item, index) => (
            <Components typeComponent="card" data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
