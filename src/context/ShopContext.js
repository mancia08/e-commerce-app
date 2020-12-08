import { render } from "@testing-library/react";
import React, { Component } from "react";
export const ShopContext = React.createContext();

class ShopProvider extends Component {
  state = {
    isHomePage: true,
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default ShopProvider;
