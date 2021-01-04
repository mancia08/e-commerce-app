import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import { MyContext } from "../../../../context/APIContext";
import { textData } from "../../../../data/textData";

import Button from "../../../atoms/button/Button";

const StripeCheckoutButton = ({ price }) => {
  const context = useContext(MyContext);

  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HyOJsGQ9zu5MlObNnBhMMgC5EQpWd8sCE0mZGmeoOL4J9teVtSFrLWYuRJOCA2C75iYqQJaOuv4Fjp2ymiXGpWZ00oZn7L6BB";

  const onToken = (token) => {
    alert("Payment Succesful!");
    context.setCart("");
  };

  return (
    <StripeCheckout
      label={textData.shop.checkout.label}
      name={textData.shop.checkout.name}
      billingAddress
      shippingAddress
      currency={textData.shop.checkout.currency}
      image="https://i.imgur.com/VCZz0Xe.png"
      description={`${textData.shop.checkout.text}${price}`}
      amount={priceForStripe}
      panelLabel={textData.shop.checkout.pay}
      token={onToken}
      stripeKey={publishableKey}
    >
      <Button
        size="M"
        text={textData.shop.checkout.label}
        color="primary"
        width="parent"
      />
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
