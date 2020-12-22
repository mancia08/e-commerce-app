import React from "react";
import MapBox from "./mapbox/MapBox";
import Text from "./../../subatoms/text/Text";
import Hr from "./../../subatoms/hr/Hr"
import MainNavbar from "../../atoms/mainNavbar/MainNavbar";
import MapImage from "../../atoms/images/MapImage";
import Footer from "./../../atoms/footer/Footer";
import { ShopContext } from "./../../../context/ShopContext";
import {textData} from '../../../data/textData'

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
          text={textData.map.title}
        />
        <Hr />
        {!value.state.mobileMenu && <MapBox {...props} />}
        <Footer />
      </>
    )}
  </ShopContext.Consumer>
);

export default Map;
