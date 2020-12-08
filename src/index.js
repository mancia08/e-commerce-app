import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/App.css";
import MyAPIProvider from "./context/APIContext";
import ShopProvider, { ShopContext } from "./context/ShopContext";

ReactDOM.render(
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
