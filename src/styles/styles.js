import { Children } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Navs & related components
export const LogoLink = styled(NavLink)`
  margin-right: auto;
`;

export const LogoImg = styled.img`
  width: auto;
  height: var(--height-nav);
  @media (min-width: 768px) {padding: 0 8px}
`;

export const StyledNav = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: var(--light);
  z-index:10;
  @media (max-width: 768px) {
    background-color: var(--primary);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: var(--spacer-quad);
    margin-top: var(--spacer-quad);
    ${LogoLink} {
      display: none;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: var(--dark);
  box-sizing: border-box;
  font-family: var(--font-common), var(--font-fallback);
  font-size: var(--font-size-24);
  width: 10%;
  text-align: center;
  line-height: var(--height-nav);
  text-decoration: none;
  &.active {
    color: var(--primary);
  }
  :hover {
    color: var(--light);
    background-color: var(--primary);
  }
  @media (max-width: 768px) {
    color: var(--light);
    width: 100vw;
    &.active {
      color: var(--light);
    }
  }
`;

export const SubMenu = styled.div`
  display: none;
  background-color: var(--primary);
  width: 80vw;
  height: calc(var(--spacer-8) * 35);
  z-index: 1;
  position: absolute;
  right: calc(2 * var(--heightS-btn));
  top: calc(2 * var(--heightS-btn));
  :hover {
    display: block;
    display: flex;
    justify-content: space-around;
    padding: calc(1.5 * var(--spacer-quad));
  }
  @media (max-width: 768px) {
    display: none !important;
  }
`;
export const HoverLink = styled(StyledLink)`
  background-color: ${(p) => p.hovered && "var(--primary)"};
  color: ${(p) => p.hovered && "var(--light)"};
  &.active {
    color: ${(p) => p.hovered && "var(--light)"};
  }
  :hover {
    ~ ${SubMenu} {
      display: block;
      display: flex;
      justify-content: space-around;
      padding: calc(1.5 * var(--spacer-quad));
    }
  }
`;


