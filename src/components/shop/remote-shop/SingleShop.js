import React, { useContext, useState } from 'react';
import SingleShopCard from "./SingleShopCard";
import { MyContext } from "./../../../context/APIContext";
import Button from '../../atoms/button/Button';
import Modal from "react-modal";

Modal.setAppElement("#root");

const SingleShop = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const [item, setItem] = useState('');

  const context = useContext(MyContext);

  const toggleModal = (e) => {
    const item = context.state.items[props.category - 1].shops[props.shop][e.target.id];
    setItem(item);
    setIsOpen(!isOpen);
  }

  const click = (e) => {
    return (<div className="huy">
      <h1>{context.state.items[props.category - 1].shops[props.shop][e.target.id]}</h1>
    </div>)
  }

  return (
    <>
      {!context.loading && context.state.items[props.category - 1].shops[props.shop].map(
        (shop, index) => {
          return <>
            <SingleShopCard
              id={shop.id}
              path={`/shop/category${props.category}/${props.shop}/${index}`}
              key={index}
              imageS={shop.imageL}
              name={shop.name}
              price={shop.price}
              onClick={toggleModal}
            />
            <Button
              size="S"
              text="Add to cart"
              color="primary" />
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
        <div>{item && item.price}</div>
        <Button
          size="S"
          text="Add to cart"
          color="primary" />
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </>
  )
};

export default SingleShop;
