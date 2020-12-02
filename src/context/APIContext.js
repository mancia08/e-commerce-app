import { render } from "@testing-library/react";
import React, {Component} from "react";
export const MyAPIContext = React.createContext();

class MyAPIProvider extends Component {
    state= {
        data: [],
        url: "something",
        key: "something"
    }

/*API CALL HERE*/

render() {
    return (
        <MyAPIContext.Provider value={{
            state: this.state
        }}>
            {this.props.children}
        </MyAPIContext.Provider>
    )
}
}

export default MyAPIProvider