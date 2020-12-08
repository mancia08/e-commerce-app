import React from "react";
import { ShopContext } from "../../../context/ShopContext";
import { StyledNav, StyledLink, LogoLink } from "../../../styles/styles";
import logo from "./../../../styles/images/logo.jpg"

const Navbar = () => (
  <ShopContext.Consumer>
    {(value) => (
      <StyledNav onLoad={value.navbarToggle}>
        <LogoLink to="/home">
          <img src={logo} alt="logo"/>
        </LogoLink>
        <StyledLink to="/home">
          Home
        </StyledLink>
        <StyledLink to="/shop">
          Shop
        </StyledLink>
        <StyledLink to="/map">
          Map
        </StyledLink>
        <StyledLink to="/contact">
          Contact
        </StyledLink>
      </StyledNav>
    )}
  </ShopContext.Consumer>
);

export default Navbar;
