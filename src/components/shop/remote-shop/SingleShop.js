import SingleShopCard from "./SingleShopCard";
import { MyAPIContext } from "./../../../context/APIContext";
import Spinner from "../../spinner";
import { Route, Switch, Link } from "react-router-dom";
import Tesstt from '../../tesstt/Tesstt'


const SingleShop = (props) => (
  <MyAPIContext.Consumer>
 
    {(value) => (
      value.loading ? <Spinner /> :
            !value.state.loading && value.state.items[props.category - 1].shops[props.shop].map(
              (shop, index) => (
                <Link to={`/shop/category${props.category}/${props.shop}/${index}`}>
                <SingleShopCard
                  onClick={() => console.log('jfjfj')}
                  //path={`/shop/category${props.category}/${props.shop}/${index}`}
                  key={index}
                  imageS={shop.imageL}
                  name={shop.name}
                  price={shop.price}
                />
                </Link>
                
              )
            )
    )}
  </MyAPIContext.Consumer>
);

export default SingleShop;
