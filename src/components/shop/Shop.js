import ShopBanner from './shop-banner';

import jewerly from './shop-banner/jewelry.png'
import jacket from './shop-banner/jacket.png'
import laptop from './shop-banner/laptop.png'
import ShopIconWrap from './shop-icon-wrap';

const Shop = props => (
    <div>
        <h1>{props.title}</h1>
        <ShopBanner
        title="LOCAL JEWELRY SHOPS"
        text="Lorem lorem lorem lorem lorem lorem"
        image={jewerly}
        />
        <ShopIconWrap/>
        <ShopBanner
        title="LOCAL CLOTHES SHOPS"
        text="Lorem lorem lorem lorem lorem lorem"
        image={jacket}
        />
        <ShopIconWrap/>
        <ShopBanner
        title="LOCAL ELECTRONIC SHOPS"
        text="Lorem lorem lorem lorem lorem lorem"
        image={laptop}
        />
        <ShopIconWrap/>
    </div>
)

export default Shop;