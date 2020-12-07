import './ShopIcon.css';

const ShopIcon = ({ icon, title, text }) => (
    <div className="shop-small_wrap">
        <div className="small_wrap">
            <img src={icon} alt={title}></img>
            <h4>{title}</h4>
        </div>
        <p>{text}</p>
    </div>
)

export default ShopIcon;