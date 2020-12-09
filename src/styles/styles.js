import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledText = styled.p`
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
  :hover {
    color: ${(p) =>
      p.hoverColor === "light"
        ? "var(--light)"
        : "var(--primary)"};
    }
`;

export const StyledNav = styled.div`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  background-color: var(--light);
`;

export const StyledLink = styled(NavLink)`
  color: var(--dark);
  box-sizing: border-box;
  font-family: var(--font-common), var(--font-fallback);
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
`;

export const LogoLink = styled(NavLink)`
  margin-right: auto;
`;

export const LogoImg = styled.img`
  width: auto;
  height: var(--height-nav);
`;

export const StyledBtn = styled.button`
  height:${(p) =>
    p.size === "S"
    ? "var(--heightS-btn)"
      : p.size === "M"
      ? "var(--heightM-btn)"
        : p.size === "L"
        ? "var(--heightL-btn)"
        : "var(--heightXL-btn)"};
  line-height: ${(p) =>
    p.size === "S"
      ? "var(--heightS-btn)"
      : p.size === "M"
        ? "var(--heightM-btn)"
        : p.size === "L"
          ? "var(--heightL-btn)"
          : "var(--heightXL-btn)"};
  padding: 0 ${(p) =>
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
  }
`;

