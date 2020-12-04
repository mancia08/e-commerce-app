import { Link } from 'react-router-dom';
import './ShopIcon.css';

const ShopIcon = ({ path, icon, title, text }) => (
    <Link to={path} className="shop-small_wrap">
    <div>
        <div className="small_wrap">
            <img src={icon} alt={title}></img>
            <h4>{title}</h4>
        </div>
        <p>{text}</p>
    </div>
    </Link>
)

export default ShopIcon;