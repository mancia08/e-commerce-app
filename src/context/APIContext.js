import { render } from "@testing-library/react";
import React, { Component } from "react";
export const MyAPIContext = React.createContext();

const APIkey = process.env.REACT_APP_EBAY_KEY;
class MyAPIProvider extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    //keep this itemsNumber low while in production
    const itemsNumber = 3; //how many items to pull. note that the api calls are 3x(n+1) (e.g. with 3 items i do 12api calls).
    //note that if i want 3 items per store i need to pull 9 items
    let category = [
      { id: 181033, data: [] }, //set the category. GARDENING
      { id: 15032, data: [] }, //set the category. PHONES
      { id: 63861, data: [] }, //set the category. CLOTHES
    ];
    let items = [];
    const cors = `https://cors-anywhere.herokuapp.com/`; //anti CORS <3
    const apiCall = (category) => {
      const categoryUrl = `${cors}https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${APIkey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&categoryId=${category.id}&paginationInput.entriesPerPage=${itemsNumber}`;
      const itemUrl = `${cors}https://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=JSON&appid=${APIkey}&siteid=0&version=967&ItemID=`;
      fetch(categoryUrl) //the main api call function
        .then((response) => response.json())
        .then(
          (itemData) =>
            itemData.findItemsByCategoryResponse[0].searchResult[0].item
        )
        .then((data) => {
          //start of second api call
          const dataPromisesArray = data.map((el) =>
            fetch(`${itemUrl}${el.itemId}`).then((response) => response.json())
          );
          return Promise.all(dataPromisesArray);
        })
        .then((finalData) => {
          category.data = finalData;
        });
    };
    category.map((e) => apiCall(e)); //making 3 api calls to retrieve data from 3 categories
    console.log(category);
    category.map((categories) =>
      items.push({ items: categories.data.map((item) => item.Item) })
    );
    console.log(items);
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
