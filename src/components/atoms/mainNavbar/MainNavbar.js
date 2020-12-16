import React, { Component, useContext, useState } from "react";
import MobileLogo from "../mobile/mobileLogo/MobileLogo";
import SuperNav from "../SuperNav/SuperNav";
import Burger from "../mobile/burger/Burger";
import MobileMenu from "../../atoms/mobile/mobileMenu/MobileMenu";
import Hr from "../../atoms/hr/Hr";
import Navbar from "../../atoms/navbar/Navbar";
import { ShopContext } from "../../../context/ShopContext";
import { MyContext } from "../../../context/APIContext";
import styled from "styled-components";
import { theme } from "../../../data/theme";
import Modal from "react-modal"
import Button from "./../../atoms/button/Button"
import ShoppingCart from "../../pages/shop/shopping-cart"
import StripeCheckoutButton from "../../pages/shop/stripe-button";

const MobileMainNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${theme.colors.light};
  z-index:10;
  @media (min-width: ${theme.viewport.tablet}) {
    display: none;
    padding: 0 ${theme.spacer};
  }
`;

Modal.setAppElement("#root");

const MainNavbar = () => {
  const context = useContext(MyContext);

  const getTotalPrice = () => {
    if (!context.cart) {
      return 0;
    }
    let arr = [];
    context.cart.map((el) => arr.push(el.price));
    const result = arr.reduce((acc, val) => acc + val, 0);
    return result.toFixed(2);
  };

  const renderAddedItems = (arr) => {
    return arr.map(({ name, price, imageS }, i) => {
      return (
        <ShoppingCart
          key={i}
          name={name.split(" ").slice(0, 3).join(" ")}
          image={imageS}
          price={price}
        />
      );
    });
  };
  
  return (<ShopContext.Consumer>
    {(value) => ( value.state.paymentOpen ?
         <Modal
         isOpen={value.state.paymentOpen}
         onRequestClose={value.togglePayment}
         contentLabel="shopping-cart"
         className="mymodal"
         overlayClassName="myoverlay"
         closeTimeoutMS={500}
       >
         {!context.cart.length ? (
           <h4>You havent added any items YET</h4>
         ) : (
           renderAddedItems(context.cart)
         )}
         <Button
           size="S"
           color="primary"
           action={value.togglePayment}
           text="Continue shopping"
         />
         <p>Pay Total of £ {getTotalPrice()}</p>
         <p>
           <StripeCheckoutButton price={getTotalPrice()} />
         </p>
       </Modal>
       :
      <>
        <MobileMainNavContainer>
          <MobileLogo path="/home" action={value.closeLogin} />
          <SuperNav type="mobile" />
          <Burger action={value.toggleMobileMenu} />
          {value.state.mobileMenu && (
            <MobileMenu path="/home" action={value.closeLogin} />
          )}
        </MobileMainNavContainer>
        <div className="supernav-toggle-container">
          <SuperNav />
          <Hr />
        </div>
        <div className="nav-container">
          <Navbar />
        </div>
      </>
    )}
  </ShopContext.Consumer>)
};

export default MainNavbar;
