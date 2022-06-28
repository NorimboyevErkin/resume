import React, { useContext, useEffect, useRef } from "react";
import Card from "../../components/card";
import { SectionContext } from "../../context";
import project from "../../data/project.json";
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
      {...others}
    >
      <div className="container">
        <h2 className="title">My projects</h2>
        <div className={styles.ProjectGrid}>
          {project.map((item, index) => (
            <Card
              data={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
