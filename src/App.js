import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import MyAPIProvider from "./context/APIContext";

import Navbar from "./components/atoms/navbar";
import Home from "./components/home";
import Logo from "./components/atoms/logo";
import Shop from "./components/shop";
import Map from "./components/map";
import Contact from "./components/contact";

const App = () => {
  const [home, setHome] = useState({
    title: "This is the home component",
  });

  const [logo, setLogo] = useState({
    title: "This is logo component",
  });

  const [shop, setShop] = useState({
    title: "This is shop component",
  });

  const [map, setMap] = useState({
    title: "This is map component",
  });

  const [contact, setContact] = useState({
    title: "This is contact component",
  });

  return (
    <MyAPIProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" render={<Home />} />
        <Route
          path="/home"
          render={(props) => <Home {...props} title={home.title} />}
        />
        
        <Route
          path="/shop"
          render={(props) => <Shop {...props} title={shop.title} />}
        />
        <Route
          path="/map"
          render={(props) => <Map {...props} title={map.title} />}
        />
        <Route
          path="/contact"
          render={(props) => <Contact {...props} title={contact.title} />}
        />
      </Switch>
    </MyAPIProvider>
  );
};

export default App;
