import SingleShopCard from "./SingleShopCard"
import {MyAPIContext} from "./../../../context/APIContext"

const SingleShop = (props) => (
    <MyAPIContext.Consumer>
        {value => (
            <>
            <h1>{props.text}</h1>
            {value.state.items[props.category-1].shops[props.shop].map((shop, index) =>
            <SingleShopCard
            key = {index}
            imageS = {shop.imageS}
            name = {shop.name}
            price = {shop.price}
        />
            )}

            </>
        )}
    

    </MyAPIContext.Consumer>
)

export default SingleShop;