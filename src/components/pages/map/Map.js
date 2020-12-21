import React from "react";
import MapBox from "./mapbox/MapBox";
import Text from "./../../subatoms/text/Text";
import MainNavbar from "../../atoms/mainNavbar/MainNavbar";
import MapImage from "../../atoms/images/MapImage";
import Footer from "./../../atoms/footer/Footer";
import { ShopContext } from "./../../../context/ShopContext";

const Map = (props) => (
  <ShopContext.Consumer>
    {(value) => (
      <>
        <MainNavbar />
        <MapImage />
        <Text
          color="dark"
          size="M"
          text="Buy local from our partern sellers!"
        />
        {!value.state.mobileMenu && <MapBox {...props} />}
        <Footer />
      </>
    )}
  </ShopContext.Consumer>
);

export default Map;
