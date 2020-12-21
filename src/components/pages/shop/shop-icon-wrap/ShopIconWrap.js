import React, { useContext } from 'react';
import ShopIcon from "../shop-icon";
import { MyContext } from "../../../../context/APIContext";
import icon from "../shop-icon/Icon.png";
import { shopData } from '../../../../data/shopData';
import "./ShopIconWrap.css";

const ShopIconWrap = ({ category }) => {
  const context = useContext(MyContext);

  const shopNames = shopData.map(el => (
    el.shops.map(elem => elem.name)
  ));
  const shopAdress = shopData.map(el => (
    el.shops.map(elem => elem.address)
  ))
  return  (
      <div className="shop-icon_wrap">
        {context.state.items[0].shops.map((el, index) => (
          <ShopIcon
            path={`/shop/${category}/${index}`}
            key={index}
            icon={icon}
            title={shopNames[category.slice(-1) - 1][index]}
            text={shopAdress[category.slice(-1) - 1][index]}
          />
        ))}
      </div>
    )
};
export default ShopIconWrap;
