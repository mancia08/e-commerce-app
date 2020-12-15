  
import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ name, price, image, length }) => (
    <div>
        <div className="cart_item">
            <span>{name}</span>
            <img src={image} alt={name}/>
            <span className="cart-price">{price} £</span>
        </div>
        <span>{length}</span>
   </div>
)

export default ShoppingCart;