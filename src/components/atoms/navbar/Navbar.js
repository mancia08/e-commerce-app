import React from "react";
import { ShopContext } from "../../../context/ShopContext";
import { StyledNav, StyledLink, LogoLink } from "../../../styles/styles";
import logo from "./../../../styles/images/logo.jpg";

const Navbar = (props) => (
  <ShopContext.Consumer>
    {(value) => (
      <StyledNav onLoad={value.navbarToggle}>
        {props.type !== "home" && (
          <>
            <LogoLink to="/home" onClick={value.closeLogin}>
              <img src={logo} alt="logo" />
            </LogoLink>
            <StyledLink to="/home" onClick={value.closeLogin}>
              Home
            </StyledLink>
          </>
        )}
        <StyledLink to="/shop" onClick={value.closeLogin}>
          Shop
        </StyledLink>
        <StyledLink to="/map" onClick={value.closeLogin}>
          Map
        </StyledLink>
        <StyledLink to="/contact" onClick={value.closeLogin}>
          Contact
        </StyledLink>
      </StyledNav>
    )}
  </ShopContext.Consumer>
);

export default Navbar;
