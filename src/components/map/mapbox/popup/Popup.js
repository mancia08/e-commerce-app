import './Popup.css';

const Popup = ({ feature }) => {
    const { id, name, description, phone, address, address2, address3 } = feature.properties;

    return (
        <div id={`popup-${id}`} className="map-pop-up">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{phone}</p>
            <p>{address}</p>
            <p>{address2}</p>
            <p>{address3}</p>
        </div>
    );
};

export default Popup;