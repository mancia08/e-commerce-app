import React, { useContext, useState } from 'react';
import SingleShopCard from "./SingleShopCard";
import { MyContext } from "./../../../../context/APIContext";
import Button from '../../../atoms/button/Button';
import Modal from "react-modal";

import { v4 as uuidv4 } from 'uuid';
import StripeCheckoutButton from '../stripe-button';

Modal.setAppElement("#root");

const SingleShop = ({ category, shop }) => {

  const [isOpen, setIsOpen] = useState(false);

  const [item, setItem] = useState('');

  const context = useContext(MyContext);

  const toggleModal = (e) => {
    const item = context.state.items[category - 1].shops[shop][e.target.id];
    setItem(item);
    setIsOpen(!isOpen);
  }

  const findAddedItem = (arr) => {
    const result = arr.filter(item => !(!item.addedToCart));
    return result;
  }

  const onAddToCartClick = (e) => {
    context.state.items[category - 1].shops[shop][e.target.id].addedToCart = true;
    const item = findAddedItem(context.state.items[category - 1].shops[shop]);
    context.setCart(item);
    if (!context.loading) {
      console.log(context.ebayItems)
    }
  }

  return (
    <>
      {!context.loading && context.state.items[category - 1].shops[shop].map(
        (shop, index) => {
          return <>
            <SingleShopCard
              id={shop.id}
              path={`/shop/category${category}/${shop}/${index}`}
              key={index}
              imageS={shop.imageL}
              name={shop.name}
              price={`${shop.price} £`}
              onClick={toggleModal}
              onAddItemClick={onAddToCartClick}
            />
          </>
        }
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Item"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>{item && item.name}</div>
        <img className="modal_img" src={item && item.imageL} alt={item && item.name} />
        <div>{item && item.price} £</div>
        <Button
          key={uuidv4()}
          id={item && item.id}
          size="S"
          text="Add to cart"
          color="primary"
          action={onAddToCartClick}
        />

        <Button
          size="S"
          text="Continue shopping"
          color="primary"
          action={toggleModal} />
        <p>
          Pay Total of £ {item && item.price}
        </p>
        <p>
          <StripeCheckoutButton
           price={item && item.price} />
        </p>
      </Modal>
    </>
  )
};

export default SingleShop;
