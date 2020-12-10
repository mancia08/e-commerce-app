import React, { Component } from "react";
import { ShopContext } from "../../../context/ShopContext";
import {
  StyledNav,
  HoverLink,
  StyledLink,
  LogoLink,
  LogoImg,
} from "../../../styles/styles";
import logo from "./../../../styles/images/logonorris.png";
import HoverMenu from "./HoverMenu";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isHover: false };
  }
  hovering = () => this.setState({ isHover: true });
  notHovering = () => this.setState({ isHover: false });

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
              <HoverLink
                hovered={this.state.isHover}
                to="/shop"
                onClick={value.closeLogin}
              >
                SHOP
              </HoverLink>

              <HoverMenu over={this.hovering} out={this.notHovering} action = {value.closeLogin}/>

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
