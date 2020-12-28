import React from "react";
import { textData } from "../../../../data/textData";
import { theme } from "../../../../data/theme";
import styled from "styled-components";

import Button from "../../../subatoms/button/Button";
import Text from "../../../subatoms/text/Text";
import Hr from "../../../subatoms/hr/Hr";

const StyledCartItem = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacer};
  img {
    width: 80%;
  }
  div {
    display: flex;
    gap: ${theme.spacer};
  }
`;

const CartItem = ({
  id,
  name,
  price,
  image,
  increase,
  decrease,
  quantity,
  remove,
  index,
}) => (
  <StyledCartItem id={id} key={index}>
    <Text size="M" color="primary" text={name} />
    <img src={image} alt={name} />
    <div>
      <Text size="S" color="dark" text={textData.shop.cart.quantity} />
      <Text size="S" color="primary" text={quantity} />
    </div>
    <div>
      <Text size="S" color="dark" text={textData.shop.cart.add} />
      <Button
        size="S"
        id={id}
        color="primary"
        action={(e) => increase(e)}
        text="+"
      />
    </div>
    <div>
      <Text size="S" color="dark" text={textData.shop.cart.minus} />
      <Button
        size="S"
        id={id}
        color="primary"
        action={(e) => decrease(e)}
        text="-"
      />
    </div>
    <Text size="M" color="primary" text={`${price} £`} />
    <Button
      size="M"
      id={id}
      color="primary"
      action={(e) => remove(e)}
      text={textData.shop.cart.remove}
    />
    <Hr width="parent" />
  </StyledCartItem>
);

export default CartItem;
