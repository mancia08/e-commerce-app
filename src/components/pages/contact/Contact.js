import React, { useContext } from "react";
import MainNavbar from "../../atoms/mainNavbar/MainNavbar";
import ContactContainer from "./ContactContainer";
import { ShopContext } from "../../../context/ShopContext";
import Footer from "./../../atoms/footer/Footer";


const Contact = () => {

const context = useContext(ShopContext);

  return (
    <>
      <MainNavbar />
      {!context.state.mobileMenu && <ContactContainer />}
      <Footer />
    </>
  )
};

export default Contact;
