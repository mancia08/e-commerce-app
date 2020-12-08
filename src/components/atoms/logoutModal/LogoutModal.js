import React from "react";
import { ShopContext } from "../../../context/ShopContext";

const LogoutModal = () => 
  <ShopContext.Consumer>
    {(value) => (
      <>
        <button onClick={value.logout}>logout</button>
        <button onClick={value.loginIconToggle}>X</button>
      </>
    )}
  </ShopContext.Consumer>
;

export default LogoutModal;
