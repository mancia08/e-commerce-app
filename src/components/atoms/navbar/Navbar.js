import React, { Component } from "react";
import { ShopContext } from "../../../context/ShopContext";
import {
  StyledNav,
  SubMenu,
  HoverLink,
  StyledLink,
  LogoLink,
  LogoImg,
} from "../../../styles/styles";
import logo from "./../../../styles/images/logonorris.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ShopContext.Consumer>
        {(value) => (
          <>
            <StyledNav onLoad={value.navbarToggle}>
              <LogoLink to="/home" onClick={value.closeLogin}>
                <LogoImg src={logo} alt="logo" />
              </LogoLink>
              <StyledLink to="/home" onClick={value.closeLogin}>
                HOME
              </StyledLink>
              <HoverLink to="/shop" onClick={value.closeLogin}>
                SHOP
              </HoverLink>
              <SubMenu></SubMenu>
              <StyledLink to="/map" onClick={value.closeLogin}>
                MAP
              </StyledLink>
              <StyledLink to="/contact" onClick={value.closeLogin}>
                CONTACT
              </StyledLink>
            </StyledNav>
          </>
        )}
      </ShopContext.Consumer>
    );
  }
}

export default Navbar;
