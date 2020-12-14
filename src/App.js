import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Shop from "./components/shop";
import Map from "./components/map";
import Contact from "./components/contact";
import { ShopContext } from "./context/ShopContext";

const App = () => {
  const [shop, setShop] = useState({
    title: "This is shop component",
  });

  const [map, setMap] = useState({
    title: "This is map component",
  });

  const [contact, setContact] = useState({
  });

  return (
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/home" render={() => <Home />} />

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
          <Route path='/google' component={() => { 
     window.open('https://www.google.com');
     {/* <Link to ={window.history.back()}/> */}
     /* routerprovider.history.goBack() ??? */
     /* routerHistory.provider goback */
}}/>
<Route path='/facebook' component={() => { 
     window.open('https://www.facebook.com');
     {/* <Link to ={window.history.back()}/> */}
}}/>
        </Switch>
  );
};

export default App;
