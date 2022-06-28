import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import UpButton from "../upButton";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <UpButton/>
      <Footer />
    </>
  );
}

export default Layout;
