import { render } from "@testing-library/react";
import React, { Component } from "react";
import { loginData } from "./../data/loginData";
export const ShopContext = React.createContext();

class ShopProvider extends Component {
  state = {
    loginIconClicked: false,
    mobileMenu: false,
    cartShown: false,
    isLoggedIn: false,
    username: "",
    password: "",
    loginFailed: false,
    addedItems: [{
      name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
      imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
      imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
      price: 25.99,
    },{
      name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
      imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
      imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
      price: 25.99,
    },{
      name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
      imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
      imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
      price: 25.99,
    }],
    itemsPrice: 23.33,
  };

  /*MOBILE MENU TOGGLE*/
  toggleMobileMenu = () => 
  this.setState({ mobileMenu: !this.state.mobileMenu})

  /*ACCOUNT ICON TOGGLE*/
  loginIconToggle = () =>
    this.setState({ loginIconClicked: !this.state.loginIconClicked });
  closeLogin = () => this.setState({loginIconClicked: false});

  /*CART TOGGLE*/
  cartToggle = () => this.setState({cartShown: !this.state.cartShown})

  /*LOGIN AND LOGOUT LOGIC*/
  username = (event) =>
    this.setState({ username: event.target.value, loginFailed: false });
  password = (event) =>
    this.setState({ password: event.target.value, loginFailed: false });
  login = () => {
    const account = loginData.filter(
      (account) => account.user === this.state.username
    );
    account.length === 0
      ? this.setState({ loginFailed: true, username: "", password: "" })
      : account[0].password === this.state.password
      ? this.setState({
          isLoggedIn: true,
          loginIconClicked: false,
          loginFailer: false,
          username: "",
          password: ""
        })
      : this.setState({ loginFailed: true });
  };
  logout = () =>
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
      loginIconClicked: !this.state.loginIconClicked,
    });


    /*ADD STUFF TO CART LOGIC HERE*/
    /*addedItems:[] is already in state*/

    /*SHOP PRICE LOGIC HERE*/
    /*itemsPrice inside state and hardcoded*/


  render() {
    return (
      <ShopContext.Provider
        value={{
          state: this.state,
          toggleMobileMenu: this.toggleMobileMenu,
          loginIconToggle: this.loginIconToggle,
          login: this.login,
          logout: this.logout,
          username: this.username,
          password: this.password,
          closeLogin: this.closeLogin,
          cartToggle: this.cartToggle
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default ShopProvider;
