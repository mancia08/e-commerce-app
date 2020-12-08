import React from "react";
import { ShopContext } from "../../../context/ShopContext";
import { StyledNav, StyledLink, LogoLink } from "../../../styles/styles";
import logo from "./../../../styles/images/logo.jpg"

const Navbar = () => (
  <ShopContext.Consumer>
    {(value) => (
      <StyledNav>
        <LogoLink onClick={value.hideNavbar} to="/home">
          <img src={logo} alt="logo"/>
        </LogoLink>
        <StyledLink onClick={value.hideNavbar} to="/home">
          Home
        </StyledLink>
        <StyledLink onClick={value.showNavbar} to="/shop">
          Shop
        </StyledLink>
        <StyledLink onClick={value.showNavbar} to="/map">
          Map
        </StyledLink>
        <StyledLink onClick={value.showNavbar} to="/contact">
          Contact
        </StyledLink>
      </StyledNav>
    )}
  </ShopContext.Consumer>
);

export default Navbar;
