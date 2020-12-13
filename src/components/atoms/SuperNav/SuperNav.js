import React, { useContext, useState } from 'react';
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
import { StyledSuperNav, SuperNavImg } from "../../../styles/styles";
import ShoppingCart from '../../shop/shopping-cart';

import Modal from "react-modal";

Modal.setAppElement("#root");

const SuperNav = (props) => {

  const context = useContext(MyContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const renderAddedItems = (arr) => {
    return arr.map(({ name, price, imageS }, i) => {
      return <ShoppingCart
        key={i}
        name={name.split(' ').slice(0, 3).join(' ')}
        image={imageS}
        price={price}
      />
    })
  }

  const getTotalPrice = () => {
    if (!context.cart) {
      return
    }
    let arr = [];
    context.cart.map((el) => arr.push(el.price));
    const result = arr.reduce((acc, val) => (acc + val), 0)
    return result.toFixed(2);
  }

  return <ShopContext.Consumer>
    {(value) => (
      <StyledSuperNav color={props.color}>
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
              // next line logic to be defined thank you. J.
              text={value.state.isLoggedIn ? `Hello ${value.state.username}` : "Login / Sign Up"}
            />
          </>
        ) : (
            <div>
              {!value.state.isLoggedIn ? <LoginModal /> : <LogoutModal />}
            </div>
          )}
        {props.type !== "home" && (
          <>
            <Text color={props.textColor} size="S" text={`${getTotalPrice()} £`} />
            <SuperNavImg src={cart} alt="cart" onClick={toggleModal} />
            <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="My dialog"
            >
              {
                context.cart && renderAddedItems(context.cart)
              }
              <button onClick={toggleModal}>Close modal</button>
              <button>Checkout</button>
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
};

export default SuperNav;
