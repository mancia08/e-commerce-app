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
                <ShopIconWrap 
                    category="category1"
                    />
                <ShopBanner
                    title="LOCAL CLOTHES SHOPS"
                    text="Lorem lorem lorem lorem lorem lorem"
                    image={jacket}
                />
                <ShopIconWrap 
                    category="category2"
                    />
                <ShopBanner
                    title="LOCAL ELECTRONIC SHOPS"
                    text="Lorem lorem lorem lorem lorem lorem"
                    image={laptop}
                />
                <ShopIconWrap 
                    category="category3"
                    />
            </div>
        </Route>






{/* to do: get those number dinamically working on the length of the myapicontext array */}
        <Route path='/shop/category1/0'>
            <SingleShop
                category = "1"
                shop = "0"
                text = "shop presentation here"
            />
        </Route>

        <Route path='/shop/category1/1'>
        <SingleShop
                category = "1"
                shop = "1"
                text = "hello"
            />
        </Route>

        <Route path='/shop/category1/2'>
        <SingleShop
                category = "1"
                shop = "2"
                text = "hello"
            />
        </Route>
        
        <Route path='/shop/category2/0'>
        <SingleShop
                category = "2"
                shop = "0"
                text = "hello"
            />
        </Route>

        <Route path='/shop/category2/1'>
        <SingleShop
                category = "2"
                shop = "1"
                text = "hello"
            />
        </Route>

        <Route path='/shop/category2/2'>
        <SingleShop
                category = "2"
                shop = "2"
                text = "hello"
            />
        </Route>
        
        <Route path='/shop/category3/0'>
        <SingleShop
                category = "3"
                shop = "0"
                text = "hello"
            />
        </Route>

        <Route path='/shop/category3/1'>
        <SingleShop
                category = "3"
                shop = "1"
                text = "hello"
            />
        </Route>

        <Route path='/shop/category3/2'>
        <SingleShop
                category = "3"
                shop = "2"
                text = "hello"
            />
        </Route>
    </Switch>

)

export default Shop;