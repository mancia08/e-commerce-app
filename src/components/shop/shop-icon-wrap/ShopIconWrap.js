import ShopIcon from '../shop-icon';

import icon from '../shop-icon/Icon.png';
import './ShopIconWrap.css';

const ShopIconWrap = () => {

    const renderItems = () => {
        let array = [];
        for (let i = 0; i < 6; i++) {
            array.push(`/shop/${i}`);
        }
        return array;
    }

    return (
        <div className="shop-icon_wrap">
            { renderItems().map(el => <ShopIcon
                path={el}
                key={el}
                icon={icon}
                title="Shop name"
                text="Shop adress lorem lorem lorem lorem"
            />)}
        </div>
    )
};


export default ShopIconWrap;