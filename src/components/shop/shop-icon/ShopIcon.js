import { Link } from 'react-router-dom';
import './ShopIcon.css';
import Text from "./../../atoms/text/Text"

const ShopIcon = ({ path, icon, title, text }) => (
    <Link to={path} className="shop-small_wrap">
    <div>
        <div className="small_wrap">
            <img src={icon} alt={title}></img>
            <Text color="dark" size="M" text={title}/>
        </div>
        <Text color="dark" size="S" text={text}/>
    </div>
    </Link>
)

export default ShopIcon;