import Text from "./../../atoms/text/Text";
import Button from "../../atoms/button/Button";

import './SingleCard.css'


const SingleShopCard = ({ imageS, name, price, onClick, id, onAddItemClick}) => {   //{ imageS, name, price, onClick, path}
  return (
    <div className="single-card_wrap">
      <img src={imageS} alt={name} />
      <Text color="dark" size="M" text={name} />
      <Text color="dark" size="S" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, obcaecati,
        porro hic magni aliquid error natus velit, nostrum maxime eligendi
        incidunt illo expedita? Recusandae obcaecati illum eum sequi, ullam
        veniam vel possimus totam omnis non vitae iste soluta nulla nesciunt
        autem aliquid maiores ad laborum at sed, laudantium rem cum."/>
      {/* Add method here */}
      {/* <Button action={() => onAddClick()} size="S" text="Add to cart" color="primary" /> */}
      <Button
      id={id}
      action={(e) => onClick(e)}
      size="S"
      color="primary"
      text="More details"
      />
      <Button
      id={id}
      action={(e) => onAddItemClick(e)}
      size="S"
      color="primary"
      text="Add to cart"
      />
      <Text color="primary" size="S" text={price} />
    </div>
  );
}

export default SingleShopCard;
