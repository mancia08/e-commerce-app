import { render } from "@testing-library/react";
import React, { Component } from "react";
import { loginData } from "./../data/loginData";
export const ShopContext = React.createContext();

class ShopProvider extends Component {
  state = {
    loginIconClicked: false,
    isLoggedIn: false,
    username: "",
    password: "",
    loginFailed: false,
    addedItems: ["laptop", "jacket"],
    itemsPrice: 23.33,
  };

  /*ACCOUNT ICON TOGGLE*/
  loginIconToggle = () =>
    this.setState({ loginIconClicked: !this.state.loginIconClicked });
    closeLogin = () => this.setState({loginIconClicked: false})

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
          loginIconToggle: this.loginIconToggle,
          login: this.login,
          logout: this.logout,
          username: this.username,
          password: this.password,
          closeLogin: this.closeLogin,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default ShopProvider;
