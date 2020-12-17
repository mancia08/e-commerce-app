
import React from 'react';
import './CartItem.css';

const CartItem = ({ id, name, price, image, increase, decrease, quantity, remove, index }) => (
    <div id={id}>
        <div className="cart_item">
            <span>{name}</span>
            <img src={image} alt={name} />
            <span className="cart-price">{price} £</span>
        </div>
        <p >Qty: {quantity}</p>
        <p>
            Item Count:
             <button
             id={id} 
             onClick={(e) => decrease(e)}>-</button>
            <button
            id={id}
            onClick={(e) => increase(e)}>+</button>
        </p>
        <p>
            <button
                id={id}
                onClick={(e) => remove(e)}
            >Remove From Cart
            </button>
        </p>
    </div>
)

export default CartItem;