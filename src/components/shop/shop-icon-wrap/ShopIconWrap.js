import ShopIcon from "../shop-icon";
import { MyAPIContext } from "../../../context/APIContext";
import icon from "../shop-icon/Icon.png";
import "./ShopIconWrap.css";
import Spinner from "../../spinner";

const ShopIconWrap = (props) => (
  <MyAPIContext.Consumer>
    {(value) => (
      <div className="shop-icon_wrap">
        {value.state.loading ? <Spinner/> : value.state.items[0].shops.map((el, index) => (
          <ShopIcon
            path={`/shop/${props.category}/${index}`}
            key={index}
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
