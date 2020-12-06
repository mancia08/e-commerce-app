import { Switch, Route } from "react-router-dom";
import { useContext } from "react"
import ShopBanner from "./shop-banner";
import SingleShop from "./remote-shop/SingleShop";
import jewerly from "./shop-banner/jewelry.png";
import jacket from "./shop-banner/jacket.png";
import laptop from "./shop-banner/laptop.png";
import ShopIconWrap from "./shop-icon-wrap";
import { MyAPIContext } from "./../../context/APIContext"
import "./Shop.css";

const Shop = (props) => (
  <MyAPIContext.Consumer>
    {value => (
      <Switch>
        <Route exact path="/shop">
          <div className="shop_container">
            <h1>{props.title}</h1>
            <ShopBanner
              title="LOCAL JEWELRY SHOPS"
              text="Lorem lorem lorem lorem lorem lorem"
              image={jewerly}
            />
            <ShopIconWrap category="category1" />
            <ShopBanner
              title="LOCAL CLOTHES SHOPS"
              text="Lorem lorem lorem lorem lorem lorem"
              image={jacket}
            />
            <ShopIconWrap category="category2" />
            <ShopBanner
              title="LOCAL ELECTRONIC SHOPS"
              text="Lorem lorem lorem lorem lorem lorem"
              image={laptop}
            />
            <ShopIconWrap category="category3" />
          </div>
        </Route>

        {
          value.state.items.map((category, categoryIndex) =>
            category.shops.map((shops, shopsIndex) => {
              let link = `/shop/category${categoryIndex + 1}/${shopsIndex}`
              return <Route path={link}>
                <SingleShop category={categoryIndex + 1} shop={shopsIndex} />
              </Route>
            }
            )
          )}

      </Switch>
    )

    }
  </MyAPIContext.Consumer>

);

export default Shop;