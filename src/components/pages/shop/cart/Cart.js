import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../../../context/APIContext";
import { ShopContext } from "../../../../context/ShopContext";
import Modal from "react-modal";
import styled from "styled-components";

import CartItem from "../cart-item/CartItem";
import Text from "../../../atoms/text/Text";
import TextCart from "../../../atoms/text/TextCart";
import Button from "../../../atoms/button/Button";
import Hr from "../../../atoms/hr/Hr";
import StripeCheckoutButton from "../stripe-button";

import { theme } from "../../../../data/theme";
import cart from "../../../../data/images/cart.png";
import { textData } from "../../../../data/textData";

const StyledCart = styled.div`
  display: flex;
  cursor: pointer;
  gap: calc(2 * ${theme.spacer});
`;

Modal.setAppElement("#root");

const SuperNavImg = styled.img`
  width: auto;
  height: ${theme.sizes.buttons.S};
  cursor: pointer;
  /* animation */
  transition: ${theme.transition};
  :hover {
    transform: scale(1.2);
  }
`;

const StyledCartGridSection = styled.div`
  display: grid;
  gap: ${theme.spacer};
  grid-template-columns: repeat(auto-fit, minmax(75%, 1fr));
  justify-items: center;
  margin: ${theme.spacer} auto calc(5 * ${theme.spacer});
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

const StyledCartLastSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacer};
  margin: ${theme.spacer} auto;
  div {
    display: flex;
    gap: ${theme.spacer};
  }
`;

const Cart = ({ textColor, type }) => {
  const context = useContext(MyContext);
  const shopContext = useContext(ShopContext);

  if (context.payment) {
    shopContext.cartToggle();
  }

  const findItem = (arr, id) => arr.find((el) => el.id === id);

  const findQuantity = (arr, id) => arr.filter((el) => el.id === id);

  const onIncrease = (e) => {
    let element = findItem(context.cart, Number(e.target.id));
    let copyOfItems = [...context.cart];
    copyOfItems.push(element);
    context.setCart(copyOfItems);
  };

  const onRemoveClick = (e) => {
    let element = findItem(context.cart, Number(e.target.id));
    const index = context.cart.indexOf(element);

    let copyOfItems = [...context.cart];
    copyOfItems.splice(index, 1);
    context.setCart(copyOfItems);
  };

  const deleteItem = (e) => {
    let element = findItem(context.cart, Number(e.target.id));
    let copyOfItems = [];
    context.cart.map(
      (item) => item.name !== element.name && copyOfItems.push(item)
    );
    context.setCart(copyOfItems);
  };

  const renderAddedItems = (arr) => {
    return arr
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(({ id, name, price, imageL }, i) => {
        return (
          <CartItem
            key={i}
            name={name.split(" ").slice(0, 3).join(" ")}
            image={imageL}
            price={`Price ${price.toFixed(2)}`}
            increase={onIncrease}
            decrease={onRemoveClick}
            remove={deleteItem}
            quantity={findQuantity(context.cart, id).length}
            id={id}
          />
        );
      });
  };

  const clearAllItems = () => {
    context.setCart("");
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
    <>
      <StyledCart onClick={shopContext.cartToggle}>
        {type !== "mobile" && (
          <Text color={textColor} size="S" text={`${getTotalPrice()}£`} />
        )}
        <SuperNavImg src={cart} alt="cart" />
        {context.cart.length > 0 && (
          <TextCart
            size="S"
            color={textColor}
            text={context.cart && context.cart.length}
          />
        )}
      </StyledCart>
      <Modal
        isOpen={shopContext.state.cartShown}
        onRequestClose={shopContext.cartToggle}
        contentLabel="shopping-cart"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {!context.cart.length ? (
          <Text
            size="L"
            color="primary"
            text={textData.shop.cart.empty}
            align="center"
          />
        ) : (
          <StyledCartGridSection>
            {renderAddedItems(context.cart)}
          </StyledCartGridSection>
        )}
        <Hr />
        <StyledCartLastSection>
          <Button
            size="M"
            color="primary"
            action={shopContext.cartToggle}
            text={textData.shop.cart.exit}
            width="parent"
          />
          <Button
            size="M"
            color="primary"
            text={textData.shop.cart.clear}
            action={clearAllItems}
            width="parent"
          />
          <div>
            <Text size="M" color="dark" text={textData.shop.cart.items} />
            <Text size="M" color="primary" text={context.cart.length} />
          </div>
          <div>
            <Text size="M" color="dark" text={textData.shop.cart.price} />
            <Text size="M" color="primary" text={`${getTotalPrice()} £`} />
          </div>
        </StyledCartLastSection>
        {shopContext.state.isLoggedIn ? (
          <StripeCheckoutButton price={getTotalPrice()} />
        ) : (
          <Text
            align="center"
            size="L"
            color="primary"
            text={textData.shop.checkout.notLogged}
          />
        )}
      </Modal>
    </>
  );
};

export default Cart;
