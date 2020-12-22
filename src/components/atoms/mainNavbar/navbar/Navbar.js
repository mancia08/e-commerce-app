import React, { Component } from "react";
import { ShopContext } from "../../../../context/ShopContext";
import { textData } from "../../../../data/textData";
import {
  StyledNav,
  HoverLink,
  StyledLink,
  LogoLink,
  LogoImg,
} from "../../../../styles/styles";
import logo from "./../../../../styles/images/logonorris.png";
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
                {textData.navbar.home}
              </StyledLink>
              <HoverLink
                hovered={this.state.isHover}
                to="/shop"
                onClick={value.closeLogin}
              >
                {textData.navbar.first}
              </HoverLink>

              <HoverMenu
                over={this.hovering}
                out={this.notHovering}
                action={value.closeLogin}
              />

              <StyledLink to="/map" onClick={value.closeLogin}>
              {textData.navbar.second}
              </StyledLink>
              <StyledLink to="/contact" onClick={value.closeLogin}>
              {textData.navbar.third}
              </StyledLink>
            </StyledNav>
          </>
        )}
      </ShopContext.Consumer>
    );
  }
}

export default Navbar;