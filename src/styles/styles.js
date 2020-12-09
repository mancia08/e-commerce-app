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
  line-height: var(--height50-nav);
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

export const StyledBtnS = styled.button`
  font-size: var(--font-size-18);
  line-height: var(--heightS-btn);
  height: var(--heightS-btn);
  padding: 0 var(--spacer-double);
`;

