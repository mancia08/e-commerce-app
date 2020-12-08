import { render } from "@testing-library/react";
import React, { Component } from "react";
export const ShopContext = React.createContext();

class ShopProvider extends Component {
  state = {
    isHomePage: true,
  };

  showNavbar = () => this.setState({isHomePage: false})
  hideNavbar = () => this.setState({isHomePage:true})

  render() {
    return (
      <ShopContext.Provider
        value={{
          state: this.state,
          showNavbar: this.showNavbar,
          hideNavbar: this.hideNavbar
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default ShopProvider;
