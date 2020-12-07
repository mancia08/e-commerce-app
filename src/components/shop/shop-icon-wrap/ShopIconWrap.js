import ShopIcon from "../shop-icon";
import { MyAPIContext } from "../../../context/APIContext";
import icon from "../shop-icon/Icon.png";
import "./ShopIconWrap.css";

const ShopIconWrap = () => (
  <MyAPIContext.Consumer>
    {(value) => (
      <div className="shop-icon_wrap">
        {value.state.items[0].shops.map((el) => (
          <ShopIcon
            path={el}
            key={el}
            icon={icon}
            title="Shop name"
            text="Shop adress lorem lorem lorem lorem"
          />
        ))}
      </div>
    )}
  </MyAPIContext.Consumer>
);
export default ShopIconWrap;
