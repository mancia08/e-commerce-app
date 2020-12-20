import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../../../context/APIContext";
import Modal from "react-modal";
import styled from "styled-components";

import CartItem from "../cart-item";
import Text from "../../../subatoms/text/Text";
import TextCart from "../../../subatoms/text/TextCart";
import Button from "../../../subatoms/button/Button";
import StripeCheckoutButton from "../stripe-button";

import { theme } from "../../../../data/theme";
import cart from "../../../../styles/images/cart.png";

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
`;

const Cart = ({ textColor, type }) => {
  const context = useContext(MyContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  if (context.payment) {
    toggleModal();
  }

  const findItem = (arr, id) => arr.find((el) => el.id === id);

  const findQuontity = (arr, id) => arr.filter((el) => el.id === id);

  const onIncrease = (e) => {
    let element = findItem(context.cart, Number(e.target.id));
    let copyOfItems = [...context.cart];
    copyOfItems.push(element);
    context.setCart(copyOfItems);
  }

  const onRemoveClick = (e) => {
    let element = findItem(context.cart, Number(e.target.id));
    const index = context.cart.indexOf(element);

    let copyOfItems = [...context.cart];
    copyOfItems.splice(index, 1);
    context.setCart(copyOfItems);
  };

  const renderAddedItems = (arr) => {
    return arr
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(({ id, name, price, imageS }, i) => {
        return (
          <CartItem
            key={i}
            name={name.split(" ").slice(0, 3).join(" ")}
            image={imageS}
            price={`Price ${price}`}
            increase={onIncrease}
            decrease={onRemoveClick}
            remove={onRemoveClick}
            quantity={findQuontity(context.cart, id).length}
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
    <div>
      <StyledCart onClick={toggleModal}>
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
        <Button size="S" color="primary" text="clear" action={clearAllItems} />
        <p>Total Items</p>
        <p>Total Payment £ {getTotalPrice()}</p>
        <p>
          <StripeCheckoutButton price={getTotalPrice()} />
        </p>
      </Modal>
    </div>
  );
};

export default Cart;
