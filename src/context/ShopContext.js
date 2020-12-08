import { render } from "@testing-library/react";
import React, { Component } from "react";
export const ShopContext = React.createContext();

class ShopProvider extends Component {
  state = {
    isHomePage: true,
    homeIconClicked: false,
    isLoggedIn: false,
  };

  /*NAVBAR TOGGLE*/
  showNavbar = () => this.setState({ isHomePage: false });
  hideNavbar = () => this.setState({ isHomePage: true });
  homeIconToggle = () =>
    this.setState({ homeIconClicked: !this.state.homeIconClicked });

  /*LOGIN AND LOGOUT LOGIC*/
  login = () => this.setState({ isLoggedIn: true, homeIconClicked: false });
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
          homeIconToggle: this.homeIconToggle,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default ShopProvider;
