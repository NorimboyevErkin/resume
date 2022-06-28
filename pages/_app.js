import React, { useState } from "react";
import "../styles/globals.scss";
import Layout from "../components/layout/index";
import { SectionContext } from "../context";

function MyApp({ Component, pageProps }) {
  const [sectionRefs, setsectionRefs] = useState({});
  return (
    <SectionContext.Provider value={{ sectionRefs, setsectionRefs }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SectionContext.Provider>
  );
}

export default MyApp;
