import React from "react";
import { ShopContext } from "../../../context/ShopContext";

import TextLogin from "../text/TextLogin";
import Cart from "../../pages/shop/cart";

import LoginModal from "../loginModal/LoginModal";
import LogoutModal from "../logoutModal/LogoutModal";
import userlogged from "./../../../styles/images/iconlogin.png";
import userunknown from "./../../../styles/images/iconlogout.png";

import styled from "styled-components";
import { theme } from "./../../../data/theme";

const StyledSuperNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: ${(p) =>
    p.color === "primary" ? theme.colors.primary : theme.colors.light};
  gap: calc(2 * ${theme.spacer});
  padding: ${theme.spacer};
  /*homepage*/
  position: ${(p) => p.type === "home" && "absolute"};
  top: ${(p) => p.type === "home" && theme.spacer};
  right: ${(p) => p.type === "home" && theme.spacer};
  background-color: ${(p) => p.type === "home" && theme.colors.dark2};
`;

const SuperNavImg = styled.img`
  width: auto;
  height: ${theme.sizes.buttons.S};
  cursor: pointer;
`;

const SuperNav = ({ type, color, textColor }) => {
  return (
    <ShopContext.Consumer>
      {(value) => (
        <StyledSuperNav type={type} color={color}>
          {!value.state.loginIconClicked ? (
            <>
              <SuperNavImg
                type={type}
                src={value.state.isLoggedIn ? userlogged : userunknown}
                alt="icon"
                onClick={value.loginIconToggle}
              />
              {type !== "mobile" && (
                <TextLogin
                  action={value.loginIconToggle}
                  size="S"
                  color={textColor}
                  text={
                    value.state.isLoggedIn
                      ? `Hello ${value.state.user}`
                      : "Login / Sign Up"
                  }
                />
              )}
            </>
          ) : (
          <>
              {!value.state.isLoggedIn ? (
                <LoginModal type={type} />
              ) : (
                <LogoutModal type={type} />
              )}
            </>
          )}
          {type !== "home" && <Cart type={type} />}
        </StyledSuperNav>
      )}
    </ShopContext.Consumer>
  );
};

export default SuperNav;