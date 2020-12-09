import './Popup.css';

const Popup = ({ feature, router }) => {
    const { category, id, name, address } = feature.properties;
    const handleClick = () => router.history.push(`/shop/category${category + 1}/${id}`);
    console.log(id, category)
    return (

        <div id={`popup-${id}`} className="map-pop-up">
            <h3>{name}</h3>
            <h4>{address}</h4>
            <button
            onClick={handleClick}
            >Go</button>
        </div>
    );
};

export default Popup;