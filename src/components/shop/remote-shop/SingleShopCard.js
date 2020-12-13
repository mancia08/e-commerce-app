import React, { useContext } from 'react';
import { MyContext } from "./../../../context/APIContext";
import Text from "./../../atoms/text/Text";
import Button from "../../atoms/button/Button";

import './SingleCard.css'


const SingleShopCard = (props) => {   //{ imageS, name, price, onClick, path}

  const context = useContext(MyContext);

  const onAddClick = () => {
    console.log(props)
  }

  return (
    <div className="single-card_wrap">
      <img src={props.imageS} alt={props.name} />
      <Text color="dark" size="M" text={props.name} />
      <Text color="dark" size="S" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, obcaecati,
        porro hic magni aliquid error natus velit, nostrum maxime eligendi
        incidunt illo expedita? Recusandae obcaecati illum eum sequi, ullam
        veniam vel possimus totam omnis non vitae iste soluta nulla nesciunt
        autem aliquid maiores ad laborum at sed, laudantium rem cum."/>
      {/* Add method here */}
      {/* <Button action={() => onAddClick()} size="S" text="Add to cart" color="primary" /> */}
      <button
      id={props.id}
      onClick={(e) => props.onClick(e)}
      >Add to cart</button>
      <Text color="primary" size="S" text={props.price} />
    </div>
  );
}

export default SingleShopCard;
