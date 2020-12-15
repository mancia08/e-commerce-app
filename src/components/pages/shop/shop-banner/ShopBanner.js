import './ShopBanner.css';
import Text from "./../../../atoms/text/Text"

const ShopBanner = ({ title, text, image }) => (
    <div className="shop-banner_wrap">
        <div className="description_wrap">
        <Text color="light" size="L" text={title}/>
        <Text color="light" size="S" text={text}/>
        <Text color="light" size="S" text={text}/>
        </div>
        <div className="image_wrap">
            <img src={image} alt={title}></img>
        </div>
    </div>
);

export default ShopBanner;