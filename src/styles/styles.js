import { NavLink } from "react-router-dom";
import styled from "styled-components";

/*
========================
Atoms Components
========================
*/
// Hr

export const StyledHr = styled.hr`
  border-top: 2px solid var(--primary);
  margin: var(--spacer-8);
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
    p.size === "S"
      ? "var(--font-size-18)"
      : p.size === "M"
      ? "var(--font-size-24)"
      : p.size === "L"
      ? "var(--font-size-30)"
      : "var(--font-size-48)"};
`;

export const StyledTextLogin = styled.p`
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
  :hover {
    cursor: pointer;
  }
`;

export const StyledTextCart = styled.p`
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
  background-color: var(--red);
  border-radius: 50%;
  text-align: center;
  width: var(--font-size-24);
  height: var(--font-size-24);
`;

// Buttons
export const StyledBtn = styled.button`
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

export const StyledBtnX = styled.button`
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
  background-color: var(--primary);
  border-radius: ${(p) =>
    p.size === "S"
      ? "var(--spacer-8)"
      : p.size === "M"
      ? "var(--spacer-double)"
      : p.size === "L"
      ? "var(--spacer-triple)"
      : "var(--spacer-quad)"};
  border: none;
  :hover {
    color: var(--dark);
    background-color: var(--light);
  }
`;

// Modals & PopUps
export const HomeModal = styled.div`
  background-color: yellow;
`;

export const LoginPopUp = styled.div`
  background-color: var(--primary);
`;

export const LogoutPopUp = styled.div`
  background-color: var(--primary);
`;

// Navs & related components
export const StyledNav = styled.div`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: calc(var(--spacer-8) + var(--heightS-btn));
  background-color: var(--light);
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
`;

export const SubMenu = styled.div`
  display: none;
  background-color: red;
  width: 80vw;
  height: 500px;
`;
export const HoverLink = styled(StyledLink)`
  :hover {
    ${SubMenu} {
      display: block;
    }
  }
`;

export const LogoLink = styled(NavLink)`
  margin-right: auto;
`;

export const LogoImg = styled.img`
  width: auto;
  height: var(--height-nav);
`;

export const StyledSuperNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  background-color: var(--light);
  gap: var(--spacer-double);
  padding-top: var(--spacer-8);
`;

export const SuperNavImg = styled.img`
  width: auto;
  height: var(--heightS-btn);
  cursor: pointer;
`;
