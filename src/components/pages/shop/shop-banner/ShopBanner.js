import './ShopBanner.css';
import Text from "./../../../subatoms/text/Text";

import ShopBannerImage from "../../../atoms/images/ShopBannerImage";

const ShopBanner = ({ title, text, image }) => (
    <div className="shop-banner_wrap">
        <div className="description_wrap">
        <Text color="light" size="L" text={title}/>
        <Text color="light" size="S" text={text}/>
        <Text color="light" size="S" text={text}/>
        </div>
        <div className="image_wrap">
            <ShopBannerImage image={image} alt={title} />
        </div>
    </div>
);

export default ShopBanner;