import React, { Component } from "react";
import MobileLogo from "../mobile/mobileLogo/MobileLogo";
import SuperNav from "../SuperNav/SuperNav";
import Burger from "../mobile/burger/Burger";
import MobileMenu from "../../atoms/mobile/mobileMenu/MobileMenu";
import Hr from "../../atoms/hr/Hr";
import Navbar from "../../atoms/navbar/Navbar";
import { ShopContext } from "../../../context/ShopContext";
import styled from "styled-components";
import { theme } from "../../../data/theme";

const MobileMainNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${theme.colors.light};
  @media (min-width: ${theme.viewport.tablet}) {
    display: none;
    padding: 0 ${theme.spacer};
  }
`;

const MainNavbar = () => (
  <ShopContext.Consumer>
    {(value) => (
      <>
        <MobileMainNavContainer>
          <MobileLogo path="/home" action={value.closeLogin} />
          <SuperNav type="mobile" />
          <Burger action={value.toggleMobileMenu} />
          {value.state.mobileMenu && (
            <MobileMenu path="/home" action={value.closeLogin} />
          )}
        </MobileMainNavContainer>
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
);

export default MainNavbar;
