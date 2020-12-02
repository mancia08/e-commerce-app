import { render } from "@testing-library/react";
import React, { Component } from "react";
export const MyAPIContext = React.createContext();

const APIkey = process.env.REACT_APP_EBAY_KEY;
class MyAPIProvider extends Component {

state = {
    items: [],
  };

  componentDidMount() {     //keep this itemsNumber low while in production
    const itemsNumber = 3;  //how many items to pull. note that the api calls are 3x(n+1) (e.g. with 3 items i do 12api calls).
    let category = [
      { id: 181033, data: [] },   //set the category. GARDENING
      { id: 15032, data: [] },    //set the category. PHONES
      { id: 63861, data: [] },    //set the category. CLOTHES
    ];
    const cors = `https://cors-anywhere.herokuapp.com/`;   //anti CORS <3
    const apiCall = (category) => {
      const url = `${cors}https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${APIkey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&categoryId=${category.id}&paginationInput.entriesPerPage=${itemsNumber}`;
      fetch(url)       //the main api call function
        .then((response) => response.json())
        .then(
          (data) => data.findItemsByCategoryResponse[0].searchResult[0].item
        )
        .then((result) => (category.data = result));
      console.log(category);   //check. to remove later
    };
    category.map((e) => apiCall(e));  //making 3 api calls to retrieve data from 3 categories
  }

  render() {
    return (
      <MyAPIContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </MyAPIContext.Provider>
    );
  }
}

export default MyAPIProvider;
