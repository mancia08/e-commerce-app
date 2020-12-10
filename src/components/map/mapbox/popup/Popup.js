import './Popup.css';

const Popup = ({ feature, router }) => {
    const { category, id, name, address } = feature.properties;
    const handleClick = () => router.history.push(`/shop/category${category + 1}/${id}`);
    return (

        <div id={`popup-${id}`} className="map-pop-up">
            <h3>{name}</h3>
            <h4>{address}</h4>
            <div className="map-btn_wrap">
            <button
            className="map_btn"
            onClick={handleClick}
            >GO SHOPPING!</button>
            </div>
            
        </div>
    );
};

export default Popup;