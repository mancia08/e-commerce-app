
import React from 'react';
import './CartItem.css';

const CartItem = ({ name, price, image, increase, decrease, quantity, remove }) => (
    <div>
        <div className="cart_item">
            <span>{name}</span>
            <img src={image} alt={name} />
            <span className="cart-price">{price} £</span>
        </div>
        <p >Qty: {quantity}</p>
        <p>
            Item Count:
             <button onClick={(e) => decrease(e)}>-</button>
            <button onClick={(e) => increase(e)}>+</button>
        </p>
        <p>
        <button onClick={(e) => remove(e)}>Remove From Cart</button>
        </p>
    </div>
)

export default CartItem;