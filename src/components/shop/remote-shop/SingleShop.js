import React, { useContext } from 'react';
import SingleShopCard from "./SingleShopCard";
import { MyContext } from "./../../../context/APIContext";
import { Link } from "react-router-dom";
import Button from '../../atoms/button/Button';

const SingleShop = (props) => {

  const context = useContext(MyContext);

  const click = (e) => {
    console.log(e.target.id)
  }

  return (
    <>
      <h1>{props.text}</h1>
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
              onClick={click}
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
    </>
  )
};

export default SingleShop;
