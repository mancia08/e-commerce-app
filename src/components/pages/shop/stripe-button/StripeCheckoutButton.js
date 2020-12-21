import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { MyContext } from '../../../../context/APIContext';

const StripeCheckoutButton = ({ price }) => {

    const context = useContext(MyContext);

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HyOJsGQ9zu5MlObNnBhMMgC5EQpWd8sCE0mZGmeoOL4J9teVtSFrLWYuRJOCA2C75iYqQJaOuv4Fjp2ymiXGpWZ00oZn7L6BB';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
        context.setCart('');
    };

    return (
        <StripeCheckout
        label='CHECKOUT'
        name='NORRIS INC.'
        billingAddress
        shippingAddress
        currency="USD"
        image='https://i.imgur.com/VCZz0Xe.png'
        description={`Your total is £${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
    )
}

export default StripeCheckoutButton;