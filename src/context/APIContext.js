import { render } from "@testing-library/react";
import React, {Component} from "react";
export const MyAPIContext = React.createContext()

const APIkey=process.env.REACT_APP_EBAY_KEY
class MyAPIProvider extends Component {

    state= {
        data: [],
    }
    
componentDidMount(){
    const cors = `https://cors-anywhere.herokuapp.com/`
    const url=`${cors}https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${APIkey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&categoryId=10181&paginationInput.entriesPerPage=12`
    fetch(url)
    .then(response => response.json())
    .then(data => data.findItemsByCategoryResponse[0].searchResult[0].item)
    .then(result => this.setState({data: result}))
}




render() {
    return (
        <MyAPIContext.Provider value={{
            state: this.state,
        }}>
            {this.props.children}
        </MyAPIContext.Provider>
    )
}
}

export default MyAPIProvider