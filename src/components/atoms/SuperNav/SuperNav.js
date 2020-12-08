import React from "react";
import { ShopContext } from "./../../../context/ShopContext";
import LoginModal from "./../../atoms/loginModal/LoginModal"
import LogoutModal from "../logoutModal/LogoutModal"
import userlogged from "./../../../styles/images/userlogged.jpg";
import userunknown from "./../../../styles/images/userunknown.jpg";
import cartempty from "./../../../styles/images/cartempty.jpg";
import cart from "./../../../styles/images/cart.jpg";

const SuperNav = props => (
  <ShopContext.Consumer>
    {value => 
      <nav>
          <div>
          {!value.state.loginIconClicked ? (
            <img
            src={value.state.isLoggedIn ? userlogged : userunknown}
            alt="icon"
            onClick={value.loginIconToggle}
          />
          ) : (
            <div>
              {!value.state.isLoggedIn ? (
                <LoginModal/>
              ) : (
                  <LogoutModal/>
              )}
            </div>
          )}
        </div>
        
        {props.type !== "home" && (
          <>
            <p>£ {value.state.itemsPrice}</p>
            <img
              src={value.state.addedItems.length === 0 ? cartempty : cart}
              alt="cart"
            />
          </>
        )}
      </nav>
    }
  </ShopContext.Consumer>
);

export default SuperNav;
