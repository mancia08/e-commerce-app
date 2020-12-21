import './Tab.css';

const Tab = ({ id, name, clazz, address, onClick, city, phone }) => {
    return (
        <div id={`listing-${id}`} className="item">
            <li id={`listing-${id}`}
                className={`title ${clazz}`}
                onClick={(e) => onClick(e)}
            >{address}</li>
            <div>{name}</div>
            <div>
                {`${city} · ${phone}`}
            </div>
        </div>
    )
}

export default Tab;