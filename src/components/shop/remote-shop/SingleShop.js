import React, { useContext } from 'react';
import SingleShopCard from "./SingleShopCard";
import { MyContext } from "./../../../context/APIContext";

const SingleShop = (props) => {

  const context = useContext(MyContext);
  return (
  <>
    <h1>{props.text}</h1>
    {!context.loading && context.state.items[props.category - 1].shops[props.shop].map(
      (shop, index) => (
        <SingleShopCard
          path={`/shop/category${props.category}/${props.shop}/${index}`}
          key={index}
          imageS={shop.imageL}
          name={shop.name}
          price={shop.price}
        />
      )
    )}
  </>
  )
};

export default SingleShop;
