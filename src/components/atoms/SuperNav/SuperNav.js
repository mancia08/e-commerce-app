import React from "react";
import { ShopContext } from "./../../../context/ShopContext";
import userlogged from "./../../../styles/images/userlogged.jpg";
import userunknown from "./../../../styles/images/userunknown.jpg";
import cartempty from "./../../../styles/images/cartempty.jpg";
import cart from "./../../../styles/images/cart.jpg";

const SuperNav = props => (
  <ShopContext.Consumer>
    {value => 
      <nav>
        <img
          src={value.state.isLoggedIn ? userlogged : userunknown}
          alt="icon"
          onClick={value.homeIconToggle}
        />
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
