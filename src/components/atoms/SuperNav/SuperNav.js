import React, { useContext, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";
import { MyContext } from "../../../context/APIContext";

import LoginModal from "../loginModal/LoginModal";
import LogoutModal from "../logoutModal/LogoutModal";
import userlogged from "./../../../styles/images/iconlogin.png";
import userunknown from "./../../../styles/images/iconlogout.png";
import cart from "./../../../styles/images/cart.png";
import Text from "../text/Text";
import TextCart from "../text/TextCart";
import TextLogin from "../text/TextLogin";
import ShoppingCart from "../../pages/shop/shopping-cart";
import styled from "styled-components";
import { theme } from "./../../../data/theme";
import Modal from "react-modal";
import Button from "../button/Button";
import StripeCheckoutButton from "../../pages/shop/stripe-button";

const StyledSuperNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: ${(p) =>
    p.color === "primary" ? theme.colors.primary : theme.colors.light};
  gap: ${2 * theme.spacer};
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
  margin-left: calc(1.2 * ${theme.spacer});
`;

const SuperNav = (props) => {
  const context = useContext(MyContext);


  const getTotalPrice = () => {
    if (!context.cart) {
      return 0;
    }
    let arr = [];
    context.cart.map((el) => arr.push(el.price));
    const result = arr.reduce((acc, val) => acc + val, 0);
    return result.toFixed(2);
  };

  return (
    <ShopContext.Consumer>
      {(value) => (
        <StyledSuperNav type={props.type} color={props.color}>
        {!value.state.loginIconClicked ? (
          <>
            <SuperNavImg
              type={props.type}
              src={value.state.isLoggedIn ? userlogged : userunknown}
              alt="icon"
              onClick={value.loginIconToggle}
            />
            {props.type !== "mobile" && (
              <TextLogin
                action={value.loginIconToggle}
                size="S"
                color={props.textColor}
                text={
                  value.state.isLoggedIn
                    ? `Hello ${value.state.user}`
                    : "Login / Sign Up"
                }
              />
            )}
          </>
        ) : (
          <div>
            {!value.state.isLoggedIn ? <LoginModal type={props.type} /> : <LogoutModal type={props.type}/>}
          </div>
        )}
        {props.type !== "home" && (
          <>
            <div onClick={value.togglePayment}>{props.type !== "mobile" && (
              <Text
                color={props.textColor}
                size="S"
                text={`${getTotalPrice()}£`}
              />
            )}</div>
            <SuperNavImg src={cart} alt="cart" onClick={value.togglePayment} />
            {context.cart.length > 0 && (
              <TextCart
                size="S"
                color={props.textColor}
                text={context.cart && context.cart.length}
                action={value.togglePayment}
              />
            )}
          </>
        )}
      </StyledSuperNav>
      )}
    </ShopContext.Consumer>
  );
};

export default SuperNav;
