import React from "react";
import MapBox from "./mapbox/MapBox";
import Text from "./../../subatoms/text/Text";
import Hr from "./../../subatoms/hr/Hr";
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
        <Hr />
        <Text
          color="primary"
          size="M"
          align="center"
          text="Buy local from our partern shops!"
        />
        <Hr />
        {!value.state.mobileMenu && <MapBox {...props} />}
        <Footer />
      </>
    )}
  </ShopContext.Consumer>
);

export default Map;
