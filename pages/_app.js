import React, { useState } from "react";
import "../styles/globals.scss";
import { SectionContext } from "../context";
import Components from "../components";

function MyApp({ Component, pageProps }) {
  const [sectionRefs, setsectionRefs] = useState({});
  return (
    <SectionContext.Provider value={{ sectionRefs, setsectionRefs }}>
      <Components typeComponent="layout">
        <Component {...pageProps} />
      </Components>
    </SectionContext.Provider>
  );
}

export default MyApp;
