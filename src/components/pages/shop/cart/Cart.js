import React, { useContext, useState } from "react";
import { MyContext } from "../../../../context/APIContext";
import Modal from "react-modal";
import styled from "styled-components";

import CartItem from "../cart-item";
import Text from '../../../atoms/text/Text';
import TextCart from "../../../atoms/text/TextCart";
import Button from "../../../atoms/button/Button";
import StripeCheckoutButton from "../stripe-button";

import './Cart.css';
import { theme } from "../../../../data/theme";
import cart from "../../../../styles/images/cart.png";

Modal.setAppElement("#root");

const SuperNavImg = styled.img`
    width: auto;
    height: ${theme.sizes.buttons.S};
    cursor: pointer;
`;

const Cart = ({ textColor }) => {

    const context = useContext(MyContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const findItem = (arr, id) => arr.find(el => el.id === id);

    const onRemoveClick = (e) => {
        let element = findItem(context.cart, Number(e.target.id))
        const index = context.cart.indexOf(element);

        let copyOfItems = [...context.cart];
        copyOfItems.splice(index, 1);
        context.setCart(copyOfItems);
    }

    const renderAddedItems = (arr) => {
        return arr.map(({ id, name, price, imageS }, i) => {
            return (
                <CartItem
                    key={i}
                    name={name.split(" ").slice(0, 3).join(" ")}
                    image={imageS}
                    price={`Price ${price}`}
                    increase
                    decrease
                    remove={onRemoveClick}
                    quantity
                    id={id}
                />
            );
        });
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
            <div
                className="cart_wrap"
                onClick={toggleModal}
            >
                <Text
                    color={textColor}
                    size="S"
                    text={`${getTotalPrice()} £`}
                />
                <SuperNavImg src={cart} alt="cart" />
                <TextCart
                    size="S"
                    color={textColor}
                    text={context.cart && context.cart.length}
                />
            </div>

            
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
                <Button
                    size="S"
                    color="primary"
                    text="clear"
                />
                <p>
                    Total Items
                </p>
                <p>
                    Total Payment £ {getTotalPrice()}
                </p>
                <p>
                    <StripeCheckoutButton
                        price={getTotalPrice()} />
                </p>
            </Modal>
        </div>
    );

}

export default Cart;