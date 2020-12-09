import ShopIcon from "../shop-icon";
import { MyAPIContext } from "../../../context/APIContext";
import icon from "../shop-icon/Icon.png";
import "./ShopIconWrap.css";
import {shopData} from "./../../../data/shopData"

const ShopIconWrap = (props) => (
  <MyAPIContext.Consumer>
    {(value) => (
      <div className="shop-icon_wrap">
        {value.state.items[0].shops.map((el, index) => (
          <ShopIcon
            path={`/shop/${props.category}/${index}`}
            key={index}
            icon={icon}
            title={shopData[props.id].shops[index].name}
            text={`${shopData[props.id].shops[index].address}${shopData[props.id].shops[index].address2} ${shopData[props.id].shops[index].address3} ${shopData[props.id].shops[index].city}`}
          />
        ))}
      </div>
    )}
  </MyAPIContext.Consumer>
);
export default ShopIconWrap;
