import React, { useContext } from 'react';
import ShopIcon from "../shop-icon";
import { MyContext } from "../../../../context/APIContext";
import icon from "../shop-icon/Icon.png";
import { shopData } from '../../../../data/shopData';
import "./ShopIconWrap.css";

const ShopIconWrap = (props) => {
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
            path={`/shop/${props.category}/${index}`}
            key={index}
            icon={icon}
            title={shopNames[props.category.slice(-1) - 1][index]}
            text={shopAdress[props.category.slice(-1) - 1][index]}
          />
        ))}
      </div>
    )
};
export default ShopIconWrap;
