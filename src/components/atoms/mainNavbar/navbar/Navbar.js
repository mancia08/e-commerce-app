import React, { useContext, useState } from "react";
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
const Navbar = () => {

  const context = useContext(ShopContext);

  const [hover, setHover] = useState(false);

  const hovering = () => setHover(true);
  const notHovering = () => setHover(false);

    return (
          <>
            <StyledNav onLoad={context.navbarToggle}>
              <LogoLink to="/home" onClick={context.closeLogin}>
                <LogoImg src={logo} alt="logo" />
              </LogoLink>
              <StyledLink to="/home" onClick={context.closeLogin}>
                {textData.navbar.home}
              </StyledLink>
              <HoverLink
                hovered={hover}
                to="/shop"
                onClick={context.closeLogin}
              >
                {textData.navbar.first}
              </HoverLink>

              <HoverMenu
                over={hovering}
                out={notHovering}
                action={context.closeLogin}
              />

              <StyledLink to="/map" onClick={context.closeLogin}>
              {textData.navbar.second}
              </StyledLink>
              <StyledLink to="/contact" onClick={context.closeLogin}>
              {textData.navbar.third}
              </StyledLink>
            </StyledNav>
          </>
    );
}

export default Navbar;