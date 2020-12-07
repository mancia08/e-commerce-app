import React from "react";
import { Link } from "react-router-dom";

import './SingleCard.css'

function SingleShopCard(props) {
  return (
    <Link to={props.path}>
    <div className="single-card_wrap">
      <img src={props.imageS} alt={props.name} />
      <h3>{props.name}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, obcaecati,
        porro hic magni aliquid error natus velit, nostrum maxime eligendi
        incidunt illo expedita? Recusandae obcaecati illum eum sequi, ullam
        veniam vel possimus totam omnis non vitae iste soluta nulla nesciunt
        autem aliquid maiores ad laborum at sed, laudantium rem cum.
      </p>
      <h1>ADD TO CART BUTTON</h1>
      <p>{props.price} £</p>
    </div>
    </Link>
  );
}

export default SingleShopCard;
