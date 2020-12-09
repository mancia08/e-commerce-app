import React from "react";
import { ShopContext } from "./../../../context/ShopContext";
import LoginModal from "./../../atoms/loginModal/LoginModal";
import LogoutModal from "../logoutModal/LogoutModal";
import userlogged from "./../../../styles/images/iconlogin.png";
import userunknown from "./../../../styles/images/iconlogout.png";
import cart from "./../../../styles/images/cart.png";
import Text from "./../text/Text";
import TextCart from "./../text/TextCart";
import { StyledSuperNav, SuperNavImg } from "../../../styles/styles";

const SuperNav = (props) => (
  <ShopContext.Consumer>
    {(value) => (
      <StyledSuperNav>
          {!value.state.loginIconClicked ? (
            <>
              <SuperNavImg
              src={value.state.isLoggedIn ? userlogged : userunknown}
              alt="icon"
              onClick={value.loginIconToggle}
            />
            <Text 
              size="S" 
              color="dark"
              // next line logic to be defined thank you. J.
              text={value.state.isLoggedIn ? `Hello ${value.state.username}` : "Login / Sign Up"}
            />
            </>
          ) : (
            <div>
              {!value.state.isLoggedIn ? <LoginModal /> : <LogoutModal />}
            </div>
          )}
        {props.type !== "home" && (
          <>
            <Text color="dark" size="S" text={value.state.itemsPrice + " £"} />
            <SuperNavImg src={cart} alt="cart" />
            <TextCart
              size="S"
              color="dark"
              // added 2 items in value.state.addedItems for testing purpose. J.
              text={value.state.addedItems.length === 0 ? "" : value.state.addedItems.length}
            />
          </>
        )}
      </StyledSuperNav>
    )}
  </ShopContext.Consumer>
);

export default SuperNav;
