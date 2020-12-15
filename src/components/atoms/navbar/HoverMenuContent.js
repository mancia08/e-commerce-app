import React from "react";
import { Link } from "react-router-dom";
import { shopData } from "./../../../data/shopData";
import Text from "./../text/Text";
import styled from "styled-components";

const HoverMenuContent = (props) => (
  <>
    {shopData.map((category, categoryIndex) => (
      <div key={categoryIndex}>
        <Text color="light" size="M" text={category.category} />
        <div key={categoryIndex}>
          {category.shops.map((shop, shopIndex) => (
            <Link
            key={shopIndex}
              to={`/shop/category${categoryIndex + 1}/${shopIndex}`}
              onClick={props.action}
            >
              <Text color="dark" size="S" key={shopIndex} text={shop.name} />
            </Link>
          ))}
        </div>
      </div>
    ))}
  </>
);

export default HoverMenuContent;
