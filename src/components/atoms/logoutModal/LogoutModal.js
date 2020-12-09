import React from "react";
import { ShopContext } from "../../../context/ShopContext";
import Button from "../../atoms/button/Button"

const LogoutModal = () => 
  <ShopContext.Consumer>
    {(value) => (
      <>
        <Button action={value.logout} size="XL" text="Logout"></Button>
        <Button action={value.loginIconToggle} size="XL" text="X"></Button>
      </>
    )}
  </ShopContext.Consumer>
;

export default LogoutModal;
