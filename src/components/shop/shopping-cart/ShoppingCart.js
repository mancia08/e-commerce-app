  
import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ name, price, length }) => (
    // <div className="shopping-cart_wrap">
    <div>
        <div className="cart_item">
            <span>{name}</span>
            <span className="cart-price">{price}$</span>
        </div>
        <span>{length}</span>
   </div>
)

export default ShoppingCart;