import { Children } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

/*
========================
Atoms Components
========================
*/
// Hr

export const StyledHr = styled.hr`
  border-top: 2px solid
    ${(p) => (p.color === "light" ? "var(--light)" : "var(--primary)")};
  margin: var(--spacer-8);

  /* @media (max-width: 768px) {
    display: none;
  } */
`;

// Texts
export const StyledText = styled.p`
  color: ${(p) =>
    p.color === "primary"
      ? "var(--primary)"
      : p.color === "light"
      ? "var(--light)"
      : "var(--dark)"};
  font-size: ${(p) =>
    p.type === "login"
      ? p.size === "S"
        ? "var(--font-size-12)"
        : p.size === "M"
        ? "var(--font-size-18)"
        : p.size === "L"
        ? "var(--font-size-24)"
        : "var(--font-size-30)"
      : p.size === "XS"
      ? "var(--font-size-12)"
      : p.size === "S"
      ? "var(--font-size-18)"
      : p.size === "M"
      ? "var(--font-size-24)"
      : p.size === "L"
      ? "var(--font-size-30)"
      : "var(--font-size-48)"};
  text-align: ${(p) =>
    p.align === "center"
      ? "center"
      : "left"};
`;


// Buttons
export const StyledBtn = styled.button`
  width: ${(p) =>
    p.width === "parent"
      ? "100%"
      : "auto"};
  height: ${(p) =>
    p.size === "S"
      ? "var(--heightS-btn)"
      : p.size === "M"
      ? "var(--heightM-btn)"
      : p.size === "L"
      ? "var(--heightL-btn)"
      : "var(--heightXL-btn)"};
  color: ${(p) =>
    p.color === "primary"
      ? "var(--primary)"
      : p.color === "light"
      ? "var(--light)"
      : "var(--dark)"};
  font-size: ${(p) =>
    p.size === "S"
      ? "var(--font-size-18)"
      : p.size === "M"
      ? "var(--font-size-24)"
      : p.size === "L"
      ? "var(--font-size-30)"
      : "var(--font-size-48)"};
  line-height: ${(p) =>
    p.size === "S"
      ? "var(--heightS-btn)"
      : p.size === "M"
      ? "var(--heightM-btn)"
      : p.size === "L"
      ? "var(--heightL-btn)"
      : "var(--heightXL-btn)"};
  padding: 0
    ${(p) =>
      p.size === "S"
        ? "var(--spacer-8)"
        : p.size === "M"
        ? "var(--spacer-double)"
        : p.size === "L"
        ? "var(--spacer-triple)"
        : "var(--spacer-quad)"};
  background-color: var(--secondary);
  border-radius: ${(p) =>
    p.size === "S"
      ? "var(--spacer-8)"
      : p.size === "M"
      ? "var(--spacer-double)"
      : p.size === "L"
      ? "var(--spacer-triple)"
      : "var(--spacer-quad)"};
  border: 1px solid var(--primary);
  :hover {
    background-color: var(--primary);
    color: var(--light);
  }
`;

export const LogoutPopUp = styled.div`
  background-color: var(--primary);
`;

// Navs & related components
export const LogoLink = styled(NavLink)`
  margin-right: auto;
`;

export const LogoImg = styled.img`
  width: auto;
  height: var(--height-nav);
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
  width: calc(var(--spacer-8) * 125);
  height: calc(var(--spacer-8) * 35);
  z-index: 1;
  position: absolute;
  right: calc(2 * var(--heightS-btn));
  top: calc(2 * var(--heightS-btn));
  :hover {
    display: block;
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
    }
  }
`;


