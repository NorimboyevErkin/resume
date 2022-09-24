import { useRef, useContext, useEffect } from "react";
import Image from "next/image";
import man from "../../public/img/man1.png";
import styles from "../../styles/pages-styles/about-styles/about-styles.module.scss";
import { SectionContext } from "../../context";
import AOS from "aos";
import "aos/dist/aos.css";
import Components from "../../components";
function About({ ...others }) {
  const about = useRef();
  const { sectionRefs } = useContext(SectionContext);

  useEffect(() => {
    sectionRefs.about = about.current;
    AOS.init({});
  }, []);

  return (
    <div
      className={styles.AboutBox + " " + "scrollIntoViewMinusNavHeight"}
      ref={about}
      id="about"
      {...others}
    >
      <div className="container">
        <h2 className="title">About me</h2>
        <div className={styles.AboutGrid}>
          <Image
            src={man}
            alt="man"
            layout="intrinsic"
            width={170}
            height={170}
            className={styles.AboutImg}
          />
          <div
            className={styles.AboutText}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <p className="text">
              Norimboyev Erkin Turg&apos;un og&apos;li Toshkent Viloyati
              Bo&apos;stonliq tumani Gazalkent shaxrida tavalud topgan. Mirzo
              Ulug&apos;bek nomidagi O&apos;zbekiston Milliy Unversiteti ,
              Axborot Tizimlari va Texnalogiyalari yo&apos;nalishida 2 - kursda
              taxsil oladi. Hozirda Frontend developer bo&apos;lib faoliyat
              yuritadi.
            </p>
          </div>
        </div>
        <Components typeComponent="tabs-panel">
          <div
            label="SKILLS"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <h3>My SKILLS</h3>
            <ol>
              <li>HTML</li>
              <li>Css (Sass , Scss)</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Next.js</li>
              <li>
                i18next , react-hook-form ,yup , react-query (TanStack-query) ,
                axios , ...others
              </li>
              <li>And Design , Material UI</li>
              <li>Git , GitHub , GitLub</li>
            </ol>
          </div>
          <div
            label="EDUCATION"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <h3>My EDUCATION</h3>
            <ol>
              <li>
                Gazalkent Xizmat ko&apos;rsatish va Iqtisodiyot kasb-xunar
                kolleji
              </li>
              <li>
                Mirzo Ulug&apos;bek nomidagi O&apos;zbekiston Milliy Unversiteti
              </li>
            </ol>
          </div>
        </Components>
      </div>
    </div>
  );
}

export default About;
