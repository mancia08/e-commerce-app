import { Switch, Route } from 'react-router-dom'
import ShopBanner from './shop-banner';
import SingleShop from "./remote-shop/SingleShop"
import jewerly from './shop-banner/jewelry.png'
import jacket from './shop-banner/jacket.png'
import laptop from './shop-banner/laptop.png'
import ShopIconWrap from './shop-icon-wrap';

import './Shop.css'

const Shop = props => (
    <Switch>
        <Route
            exact path='/shop'>
            <div className="shop_container">
                <h1>{props.title}</h1>
                <ShopBanner
                    title="LOCAL JEWELRY SHOPS"
                    text="Lorem lorem lorem lorem lorem lorem"
                    image={jewerly}
                />
                <ShopIconWrap />
                <ShopBanner
                    title="LOCAL CLOTHES SHOPS"
                    text="Lorem lorem lorem lorem lorem lorem"
                    image={jacket}
                />
                <ShopIconWrap />
                <ShopBanner
                    title="LOCAL ELECTRONIC SHOPS"
                    text="Lorem lorem lorem lorem lorem lorem"
                    image={laptop}
                />
                <ShopIconWrap />
            </div>
        </Route>

        <Route path='/shop/category1/firstShop'>
            <SingleShop/>
        </Route>

        <Route path='/shop/category1/secondShop'>
            <SingleShop/>
        </Route>

        <Route path='/shop/category1/thirdShop'>
            <SingleShop/>
        </Route>
        
        <Route path='/shop/category2/firstShop'>
            <SingleShop/>
        </Route>

        <Route path='/shop/category2/secondShop'>
            <SingleShop/>
        </Route>

        <Route path='/shop/category2/thirdShop'>
            <SingleShop/>
        </Route>
        
        <Route path='/shop/category3/firstShop'>
            <SingleShop/>
        </Route>

        <Route path='/shop/category3/secondShop'>
            <SingleShop/>
        </Route>

        <Route path='/shop/category3/thirdShop'>
            <SingleShop/>
        </Route>
    </Switch>

)

export default Shop;