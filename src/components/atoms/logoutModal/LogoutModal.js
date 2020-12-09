import React from "react";
import { ShopContext } from "../../../context/ShopContext";
import {LogoutPopUp} from "./../../../styles/styles"
import Text from "./../text/Text"

const LogoutModal = () => 
  <ShopContext.Consumer>
    {(value) => (
      <LogoutPopUp>
        <button onClick={value.logout}><Text color="light" size="L" text="logout" /></button>
        <button onClick={value.loginIconToggle}><Text color="light" size="L" text="X" /></button>
      </LogoutPopUp>
    )}
  </ShopContext.Consumer>
;

export default LogoutModal;
