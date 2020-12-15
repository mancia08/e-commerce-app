import React from 'react';
import MainNavbar from "../../atoms/mainNavbar/MainNavbar"
import ContactContainer from './ContactContainer'
import {ShopContext} from "../../../context/ShopContext"

const Contact = () => (
    <ShopContext.Consumer>
        {value => (
            <>
            <MainNavbar />
            {!value.state.mobileMenu &&  <ContactContainer />}
            </>
        )}
    </ShopContext.Consumer>
)

export default Contact;