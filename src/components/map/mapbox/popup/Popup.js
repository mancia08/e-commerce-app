import { Link } from 'react-router-dom';
import './Popup.css';

const Popup = ({ feature }) => {
    const { category, id, name, description, phone, address, address2, address3 } = feature.properties;
    console.log(id, 'id from pop');
    console.log(category, 'category from pop');
    return (

        <div id={`popup-${id}`} className="map-pop-up">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{phone}</p>
            <p>{address}</p>
            <p>{address2}</p>
            <p>{address3}</p>
            <a href={`/shop/category${category + 1}/${id}`}>Go</a>
        </div>
    );
};

export default Popup;