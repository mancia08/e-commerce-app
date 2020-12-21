import React from "react";
import { render } from 'react-dom';

import initFacebookSdk from './_helpers/init-facebook-sdk';
import jwtInterceptor from './_helpers/jwt.interceptor';
import errorInterceptor from './_helpers/error.interceptor';
import fakeBackend from './_helpers/fake-backend';


import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MyAPIProvider from "./context/APIContext";
import ShopProvider from "./context/ShopContext";


fakeBackend();
jwtInterceptor();
errorInterceptor();

const startApp = () => {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <ShopProvider>
          <MyAPIProvider>
            <App />
          </MyAPIProvider>
        </ShopProvider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

initFacebookSdk().then(startApp);