import React from "react";
import { Link } from "react-router-dom";
import Text from "./../../atoms/text/Text"
import Button from "../../atoms/button/Button"

import './SingleCard.css'

function SingleShopCard(props) {
  return (
    <Link to={props.path}>
    <div className="single-card_wrap">
      <img src={props.imageS} alt={props.name} />
      <Text color="dark" size="M" text={props.name}/>
      <Text color="dark" size="S" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, obcaecati,
        porro hic magni aliquid error natus velit, nostrum maxime eligendi
        incidunt illo expedita? Recusandae obcaecati illum eum sequi, ullam
        veniam vel possimus totam omnis non vitae iste soluta nulla nesciunt
        autem aliquid maiores ad laborum at sed, laudantium rem cum."/>
      {/* Add method here */}
      <Button action="" size="S" text="Add to cart" color="primary" />
      <Text color="primary" size="S" text={props.price}/>
    </div>
    </Link>
  );
}

export default SingleShopCard;
