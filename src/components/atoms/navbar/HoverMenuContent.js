import React from "react";
import { shopData } from "./../../../data/shopData";
import {Link} from "react-router-dom"
import Text from "./../text/Text"

const HoverMenuContent = () => (
  <>
    {shopData.map((category, categoryIndex) => (
      <div key={categoryIndex}>
        <p>{category.category}</p>
        <div>
          {category.shops.map((shop, shopIndex) => (
              <Link to={`/shop/category${categoryIndex+1}/${shopIndex}`}><p key={shopIndex}>{shop.name}</p></Link>

          ))}
        </div>
      </div>
    ))}
  </>
);

export default HoverMenuContent;
