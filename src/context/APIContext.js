import { render } from "@testing-library/react";
import React, {Component} from "react";
export const MyAPIContext = React.createContext()

const APIkey=process.env.REACT_APP_EBAY_KEY
class MyAPIProvider extends Component {
    state= {
        data: [],
    }
getData = () => {
    const url=`www.teiko.it${APIkey}`
}


/*my api call here*/

render() {
    return (
        <MyAPIContext.Provider value={{
            state: this.state,
            data: this.getData
        }}>
            {this.props.children}
        </MyAPIContext.Provider>
    )
}
}

export default MyAPIProvider