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
    const cors = `https://cors-anywhere.herokuapp.com/`; //anti CORS <3  //i use chrome cors extension, but you can add it in front of the two api call links
    const apiCall = (category) => {
      const categoryUrl = `https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${APIkey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&categoryId=${category.id}&paginationInput.entriesPerPage=${itemsNumber}`;
      const itemUrl = `https://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=JSON&appid=${APIkey}&siteid=0&version=967&ItemID=`;
      fetch(categoryUrl)
        .then((response) => response.json())
        .then(
          (itemData) =>
            itemData.findItemsByCategoryResponse[0].searchResult[0].item
        )
        .then((data) => {
          const dataPromisesArray = data.map((el) =>
            fetch(`${itemUrl}${el.itemId}`).then((response) => response.json())
          );
          return Promise.all(dataPromisesArray);
        })
        .then((finalData) => {
          finalData.map((item) =>
            category.data.push({
              name: item.Item.Title,
              imageS: item.Item.GalleryURL,
              imageL: item.Item.PictureURL[0],
              price: item.Item.ConvertedCurrentPrice.Value,
            })
          );
          console.log(category.data.length)
          let firstShop = category.data.slice(0, category.data.length/3)
          let secondShop = category.data.slice(category.data.length/3, 2*category.data.length/3)
          let thirdShop = category.data.slice(2*category.data.length/3, category.data.length)
          items.push( {firstShop: firstShop, secondShop: secondShop, thirdShop:thirdShop});
        });
    };
    category.map((e) => apiCall(e)); //making 3 api calls to retrieve data from 3 categories

    console.log(category);
    console.log(items);
    this.setState({items: items})
/* 
    this.setState({ items: {firstShop: firstShop, secondShop: secondShop, thirdShop:thirdShop} }); */
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
