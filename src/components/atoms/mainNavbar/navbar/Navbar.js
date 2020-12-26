import React, { useContext, useState } from "react";
import { ShopContext } from "../../../../context/ShopContext";
import { textData } from "../../../../data/textData";
import { NavLink } from "react-router-dom";
import {SubMenu} from './HoverMenu'
/* import {
  StyledNav,
  HoverLink,
  StyledLink,
  LogoLink,
  LogoImg,
} from "../../../../styles/styles"; */
import logo from "./../../../../styles/images/logonorris.png";
import HoverMenu from "./HoverMenu";
import styled from 'styled-components'
import {theme} from '../../../../data/theme'

export const LogoLink = styled(NavLink)`
  margin-right: auto;
`;

export const LogoImg = styled.img`
  width: auto;
  height: var(--height-nav);
  @media (min-width: ${theme.viewport.tablet}) {padding: 0 8px}
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${theme.colors.light};
  z-index:10;
  @media (max-width: ${theme.viewport.tablet}) {
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: calc(4 * ${theme.spacer});
    margin-top: calc(4 * ${theme.spacer});
    ${LogoLink} {
      display: none;
    }
  }
`;

const StyledLink = styled(NavLink)`
  color: ${theme.colors.dark};
  box-sizing: border-box;
  /* font-family: var(--font-common), var(--font-fallback); */
  font-size: ${theme.fonts.M};
  width: 10%;
  text-align: center;
  /* line-height: $theme.sizes.navbar}; */
  text-decoration: none;
  &.active {
    color: ${theme.colors.primary};
  }
  :hover {
    color: ${theme.colors.light};
    background-color: ${theme.colors.primary};
  }
  @media (max-width: ${theme.viewport.tablet}) {
    color: ${theme.colors.light};
    width: 100vw;
    &.active {
      color: ${theme.colors.light};
    }
  }
`;

const HoverLink = styled(StyledLink)`
  background-color: ${(p) => p.hovered && theme.colors.primary};
  color: ${(p) => p.hovered && theme.colors.light};
  &.active {
    color: ${(p) => p.hovered && theme.colors.light};
  }
  :hover {
    ~ ${SubMenu} {
      display: block;
      display: flex;
      justify-content: space-around;
      padding: calc(6 * ${theme.spacer});
    }
  }
`;




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