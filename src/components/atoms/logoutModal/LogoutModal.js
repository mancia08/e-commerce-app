import React from "react";
import { ShopContext } from "../../../context/ShopContext";
import ButtonX from "../../atoms/button/ButtonX"

const LogoutModal = () => 
  <ShopContext.Consumer>
    {(value) => (
      <>
        <ButtonX action={value.logout} size="XL" text="Logout" color="light" />
        <ButtonX action={value.loginIconToggle} size="XL" text="X" color="light" />
      </>
    )}
  </ShopContext.Consumer>
;

export default LogoutModal;
