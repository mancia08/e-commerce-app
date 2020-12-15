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
import ShoppingCart from "../../shop/shopping-cart";
import styled from "styled-components";
import { theme } from "./../../../data/theme";
import Modal from "react-modal";
import Button from "../button/Button";
import StripeCheckoutButton from "../../shop/stripe-button";

Modal.setAppElement("#root");

const StyledSuperNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: ${(p) =>
    p.color === "primary" ? theme.colors.primary : theme.colors.light};
  gap: ${2 * theme.spacer};
  padding: ${theme.spacer};
  /*homepage*/

  z-index: ${(p) => p.type === "home" && "1"};
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

const SuperNav = (props) => {
  const context = useContext(MyContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const renderAddedItems = (arr) => {
    return arr.map(({ name, price, imageS }, i) => {
      return (
        <ShoppingCart
          key={i}
          name={name.split(" ").slice(0, 3).join(" ")}
          image={imageS}
          price={price}
        />
      );
    });
  };

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
                src={value.state.isLoggedIn ? userlogged : userunknown}
                alt="icon"
                onClick={value.loginIconToggle}
              />
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
            </>
          ) : (
              <div>
                {!value.state.isLoggedIn ? <LoginModal /> : <LogoutModal />}
              </div>
            )}
          {props.type !== "home" && (
            <>
              <Text
                color={props.textColor}
                size="S"
                text={`${getTotalPrice()} £`}
              />
              <SuperNavImg src={cart} alt="cart" onClick={toggleModal} />
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="shopping-cart"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                {!context.cart.length ? (
                  <h4>You havent added any items YET</h4>
                ) : (
                    renderAddedItems(context.cart)
                  )}
                <Button
                  size="S"
                  color="primary"
                  action={toggleModal}
                  text="Continue shopping"
                />
                <p>
                  Pay Total of £ {getTotalPrice()}
                </p>
                <p>
                  <StripeCheckoutButton price={getTotalPrice()} />
                </p>
              </Modal>
              <TextCart
                size="S"
                color={props.textColor}
                text={context.cart && context.cart.length}
                action={value.cartToggle}
              />
            </>
          )}
        </StyledSuperNav>
      )}
    </ShopContext.Consumer>
  );
};

export default SuperNav;
