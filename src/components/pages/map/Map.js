import React from "react";
import MapBox from "./mapbox/MapBox";
import Text from "./../../atoms/text/Text";
import MainNavbar from "../../atoms/mainNavbar/MainNavbar";
import MapImage from "../../atoms/images/MapImage"

import { ShopContext } from "./../../../context/ShopContext";
import styled from "styled-components";

const Map = (props) => (
  <ShopContext.Consumer>
    {(value) => (
      <>
        <MainNavbar />
        <MapImage />
        <Text color="primary" size="M" text="Buy local from our partner sellers!" align="center" />
        {!value.state.mobileMenu && <MapBox {...props} />}
      </>
    )}
  </ShopContext.Consumer>
);

export default Map;
