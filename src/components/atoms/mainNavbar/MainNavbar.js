import React, { Component } from "react";
import MobileLogo from "../mobile/mobileLogo/MobileLogo";
import SuperNav from "../SuperNav/SuperNav";
import Burger from "../mobile/burger/Burger";
import MobileMenu from "../../atoms/mobile/mobileMenu/MobileMenu"
import Hr from "../../atoms/hr/Hr";
import Navbar from "../../atoms/navbar/Navbar"
import { ShopContext } from "../../../context/ShopContext";


const MainNavbar = () =>
    <ShopContext.Consumer>
        {value => (
            <>
                <div className="mobile-nav-container">
                <MobileLogo path="/home" action={value.closeLogin} />
                <SuperNav />
                <Burger action={value.toggleMobileMenu} />
                {value.state.mobileMenu &&
                <MobileMenu path="/home" action={value.closeLogin}/>
                }
                </div>
                <div className="supernav-toggle-container">
                <SuperNav />
                <Hr />
                </div>
                <div className="nav-container">
                <Navbar />
                </div>
            </>
        )}
    </ShopContext.Consumer>


export default MainNavbar