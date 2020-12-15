
import React from 'react';
import './CartItem.css';

const CartItem = ({ name, price, image, increase, decrease }) => (
    <div>
        <div className="cart_item">
            <span>{name}</span>
            <img src={image} alt={name} />
            <span className="cart-price">{price} £</span>
        </div>
        <p >Qty: quantity</p>
        <p>
            Item Count:
             <button onClick={() => decrease()}>-</button>
            <button onClick={() => increase()}>+</button>
        </p>
    </div>
)

export default CartItem;