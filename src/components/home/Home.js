import Button from "./../atoms/button/Button";
import banner from "./../../styles/images/banner.jpg";
import { textData } from "./../../data/textData";
import { Link } from "react-router-dom";
import { ShopContext } from "./../../context/ShopContext";
import userlogged from "./../../styles/images/userlogged.jpg";
import userunknown from "./../../styles/images/userunknown.jpg";

const Home = () => (
  <ShopContext.Consumer>
    {(value) => (
      <main>
        <img src={banner} alt="banner" />

        <div>
          {value.state.homeIconClicked ? (
            <img
              src={value.state.isLoggedIn ? userlogged : userunknown}
              alt="user"
              onClick={value.homeIconToggle}
            />
          ) : (
            <div>
              <button onClick={value.homeIconToggle}>X</button>
            </div>
          )}
        </div>

        <div>
          <h1>{textData.homepage.title1}</h1>
          <h2>{textData.homepage.title2}</h2>
          <h2>{textData.homepage.title3}</h2>
        </div>
        <Link onClick={value.showNavbar} to="/shop">
          <Button text={textData.buttons.homepage.first} />
        </Link>
        <Link onClick={value.showNavbar} to="/map">
          <Button text={textData.buttons.homepage.second} />
        </Link>
        <Link onClick={value.showNavbar} to="/contact">
          <Button text={textData.buttons.homepage.third} />
        </Link>
      </main>
    )}
  </ShopContext.Consumer>
);

export default Home;
