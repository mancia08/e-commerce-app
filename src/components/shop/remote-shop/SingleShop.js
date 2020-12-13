import React, { useContext, useState } from 'react';
import SingleShopCard from "./SingleShopCard";
import { MyContext } from "./../../../context/APIContext";
import { Link } from "react-router-dom";
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

  // const click = (e) => {
  //   return (<div className="huy">
  //     <h1>{context.state.items[props.category - 1].shops[props.shop][e.target.id]}</h1>
  //   </div>)
  // }

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
            {/* <Link to={`/shop/category${props.category}/${props.shop}/${index}`}> */}
            <Button
              size="S"
              text="See details"
              color="primary" />
            {/* </Link> */}
          </>
        }
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Item"
      >
        <div>{item && item.name}</div>
        <img src={item && item.imageS} alt={item && item.name}/>
        <div>{item && item.price}</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </>
  )
};

export default SingleShop;
