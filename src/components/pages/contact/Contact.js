import React from 'react';
import MainNavbar from "../../atoms/mainNavbar/MainNavbar"
import ContactContainer from './ContactContainer'
import {ShopContext} from "../../../context/ShopContext"
import Footer from "./../../atoms/footer/Footer"

const Contact = () => (
    <ShopContext.Consumer>
        {value => (
            <>
            <MainNavbar />
            {!value.state.mobileMenu &&  <ContactContainer />}
            <Footer/>
            </>
        )}
    </ShopContext.Consumer>
)

export default Contact;