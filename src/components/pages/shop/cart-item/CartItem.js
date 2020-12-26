import React from "react";
import { textData } from "../../../../data/textData";
import { theme } from "../../../../data/theme";
import styled from "styled-components";

import Button from "../../../subatoms/button/Button";
import Text from "../../../subatoms/text/Text";
import Hr from "../../../subatoms/hr/Hr";

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
  <div id={id}>
    <Text size="M" color="primary" text={name} align="center" />
    <img src={image} alt={name} />
    <span className="cart-price">{price} £</span>
    <div>
      <Text size="S" color="dark" text={textData.shop.cart.quantity} />
      <Text size="S" color="primary" text={quantity} />
    </div>
    <p>
      {textData.shop.cart.add}
      <button id={id} onClick={(e) => increase(e)}>
        +
      </button>
      {textData.shop.cart.minus}
      <button id={id} onClick={(e) => decrease(e)}>
        -
      </button>
    </p>
    <p>
      <button id={id} onClick={(e) => remove(e)}>
        {textData.shop.cart.remove}
      </button>
    </p>
    <Hr />
  </div>
);

export default CartItem;