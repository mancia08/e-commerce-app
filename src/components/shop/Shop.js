import { Switch, Route } from 'react-router-dom'
import ShopBanner from './shop-banner';

import jewerly from './shop-banner/jewelry.png'
import jacket from './shop-banner/jacket.png'
import laptop from './shop-banner/laptop.png'
import ShopIconWrap from './shop-icon-wrap';

import './Shop.css'
import First from './remote-shop/first';
import Second from './remote-shop/second';
import Third from './remote-shop/third';
import Fourth from './remote-shop/fourth';
import Fifth from './remote-shop/fifth';
import Sixth from './remote-shop/sixth';

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

        <Route path='/shop/0'>
            <First/>
        </Route>

        <Route path='/shop/1'>
            <Second/>
        </Route>

        <Route path='/shop/2'>
            <Third/>
        </Route>

        <Route path='/shop/3'>
            <Fourth/>
        </Route>

        <Route path='/shop/4'>
            <Fifth/>
        </Route>

        <Route path='/shop/5'>
            <Sixth/>
        </Route>
    </Switch>

)

export default Shop;