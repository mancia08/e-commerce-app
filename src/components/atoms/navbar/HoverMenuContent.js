import React from "react";
import { Link } from "react-router-dom";
import { shopData } from "./../../../data/shopData";
import Text from "./../text/Text";

const HoverMenuContent = () => (
  <>
    {shopData.map((category, categoryIndex) => (
      <div key={categoryIndex}>
        <Text color="light" size="M" text={category.category} />
        <div>
          {category.shops.map((shop, shopIndex) => (
            <Link to={`/shop/category${categoryIndex + 1}/${shopIndex}`}>
              <Text color="dark" size="S" key={shopIndex} text={shop.name} />
            </Link>
          ))}
        </div>
      </div>
    ))}
  </>
);

export default HoverMenuContent;
