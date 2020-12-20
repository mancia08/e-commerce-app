import React from "react";
import MapBox from "./mapbox";
import Text from "./../../subatoms/text/Text";
import MainNavbar from "../../atoms/mainNavbar/MainNavbar";
import MapImage from "./MapImage";
import Footer from "./../../atoms/footer/Footer";
import { ShopContext } from "./../../../context/ShopContext";

const Map = (props) => (
  <ShopContext.Consumer>
    {(value) => (
      <div>
        <MainNavbar />
        <MapImage />
        <Text
          color="dark"
          size="M"
          text="Buy local from our partern sellers!"
        />
        {!value.state.mobileMenu && <MapBox {...props} />}
        <Footer />
      </div>
    )}
  </ShopContext.Consumer>
);

export default Map;
