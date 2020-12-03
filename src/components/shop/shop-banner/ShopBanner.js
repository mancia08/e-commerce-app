import './ShopBanner.css';

const ShopBanner = ({ title, text, image }) => (
    <div className="shop-banner_wrap">
        <div className="description_wrap">
            <h1>{title}</h1>
            <p>{text}</p>
            <p>{text}</p>
        </div>
        <div className="image_wrap">
            <img src={image} alt={title}></img>
        </div>
    </div>
);

export default ShopBanner;