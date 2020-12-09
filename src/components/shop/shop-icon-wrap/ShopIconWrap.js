import ShopIcon from "../shop-icon";
import { MyAPIContext } from "../../../context/APIContext";
import icon from "../shop-icon/Icon.png";
import { shopData } from '../../../data/shopData';
import "./ShopIconWrap.css";

const ShopIconWrap = (props) => {
  const shopNames = shopData.map(el => (
    el.shops.map(elem => elem.name)
  ));
  const shopAdress = shopData.map(el => (
    el.shops.map(elem => elem.address)
  ))
  return <MyAPIContext.Consumer>
    {(value) => (
      <div className="shop-icon_wrap">
        {value.state.items[0].shops.map((el, index) => (
          <ShopIcon
            path={`/shop/${props.category}/${index}`}
            key={index}
            icon={icon}
            title={shopNames[props.category.slice(-1) - 1][index]}
            text={shopAdress[props.category.slice(-1) - 1][index]}
          />
        ))}
      </div>
    )}
  </MyAPIContext.Consumer>
};
export default ShopIconWrap;
