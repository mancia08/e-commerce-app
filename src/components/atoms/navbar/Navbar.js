import React, { Component } from "react";
import { ShopContext } from "../../../context/ShopContext";
import {
  StyledNav,
  DropDownContent,
  DropDownLink,
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
              {this.props.type !== "home" && (
                <>
                  <LogoLink to="/home" onClick={value.closeLogin}>
                    <LogoImg src={logo} alt="logo" />
                  </LogoLink>
                  <StyledLink to="/home" onClick={value.closeLogin}>
                    HOME
                  </StyledLink>
                </>
              )}
              

              <DropDownLink
                to="/shop"
                onClick={value.closeLogin}
              >
                SHOP
              </DropDownLink>
              <DropDownContent>wtf</DropDownContent>



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
