import { render } from "@testing-library/react";
import React, { Component } from "react";
import { loginData } from "./../data/loginData";
export const ShopContext = React.createContext();

class ShopProvider extends Component {
  state = {
    isHomePage: true,
    homeIconClicked: false,
    isLoggedIn: false,
    username: "",
    password: "",
    loginFailed: false,
  };

  /*NAVBAR TOGGLE*/
  showNavbar = () => {
  this.setState({ isHomePage: false });
  };
  hideNavbar = () => this.setState({ isHomePage: true });
  homeIconToggle = () =>
    this.setState({ homeIconClicked: !this.state.homeIconClicked });
    /*something like this onload?*/
 /*    navbarToggle = () =>
    window.location.href==="http://localhost:3000/" ? this.setState({isHomePage: true}) : this.setState({isHomePage: false}) */
  /*LOGIN AND LOGOUT LOGIC*/
  username = (event) => this.setState({ username: event.target.value });
  password = (event) => this.setState({ password: event.target.value });
  login = () => {
    const account = loginData.filter(
      (pizza) => pizza.user === this.state.username
    );
    account.length === 0
      ? this.setState({ loginFailed: true, username:"", password:"" })
      : account[0].password === this.state.password
      ? this.setState({
          isLoggedIn: true,
          homeIconClicked: false,
          loginFailer: false,
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
          showNavbar: this.showNavbar,
          hideNavbar: this.hideNavbar,
          navbarToggle: this. navbarToggle,
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
