import { render } from "@testing-library/react";
import React, { Component } from "react";
import { loginData } from "./../data/loginData";
export const ShopContext = React.createContext();

class ShopProvider extends Component {
  state = {
    homeIconClicked: false,
    isLoggedIn: false,
    username: "",
    password: "",
    loginFailed: false,
  };

  /*ACCOUNT ICON TOGGLE*/
  homeIconToggle = () =>
    this.setState({ homeIconClicked: !this.state.homeIconClicked });

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
          homeIconClicked: false,
          loginFailer: false,
          username: "",
          password: ""
        })
      : this.setState({ loginFailed: true });
  };
  logout = () =>
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
      homeIconClicked: !this.state.homeIconClicked,
    });
  render() {
    return (
      <ShopContext.Provider
        value={{
          state: this.state,
          homeIconToggle: this.homeIconToggle,
          login: this.login,
          logout: this.logout,
          username: this.username,
          password: this.password,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default ShopProvider;
