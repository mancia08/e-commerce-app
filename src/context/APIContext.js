import { render } from "@testing-library/react";
import React, { Component } from "react";
export const MyAPIContext = React.createContext();

const APIkey = process.env.REACT_APP_EBAY_KEY;

console.log(APIkey);
class MyAPIProvider extends Component {
  state = {
    items: [
      {
        id: "something",
        shops: [
          [
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
          ],
          [
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
          ],
          [
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
          ],
        ],
      },
      {
        id: "something",
        shops: [
          [
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
          ],
          [
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
          ],
          [
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
          ],
        ],
      },
      {
        id: "something",
        shops: [
          [
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
          ],
          [
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
          ],
          [
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
            {
              name: "singleItem.Item.Title",
              imageS: "singleItem.Item.GalleryURL",
              imageL: "singleItem.Item.PictureURL[0]",
              price: "singleItem.Item.ConvertedCurrentPrice.Value",
            },
          ],
        ],
      },
    ],
    pathLinks: [],
    loding: false,
  };

  /*  componentDidMount() {

    const itemsPerShop = 1; //keep this number = 1 during production. NOTE we do 3*(3n+1) API calls
    let category = [
      { id: 181033, data: [] }, //set the category. GARDENING
      { id: 15032, data: [] }, //set the category. PHONES
      { id: 63861, data: [] }, //set the category. CLOTHES
    ];
    let finalState = []
    const cors = `https://cors-anywhere.herokuapp.com/`; //anti CORS <3  //USE CHROME CORS EXTENSION


    const apiCall = (category) => {
      this.setState({ loading: true })
      const categoryUrl = `https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${APIkey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&categoryId=${category.id}&paginationInput.entriesPerPage=${itemsPerShop * 3}`;
      const itemUrl = `https://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=JSON&appid=${APIkey}&siteid=0&version=967&ItemID=`;

      fetch(categoryUrl)  //first API call (getting ID of items from categories)
        .then(response => response.json())
        .then(categoryData => categoryData.findItemsByCategoryResponse[0].searchResult[0].item)
        .then(result => { console.log(result[0].itemId) //second API call (getting data info from item ID)
          const dataPromisesArray = result.map(items =>
            fetch(`${itemUrl}${items.itemId[0]}`)
              .then(response => response.json()));
          return Promise.all(dataPromisesArray);
        })
        .then(itemData => {  //storing only what i need inside category.data
          itemData.map((singleItem) =>
            category.data.push({
              name: singleItem.Item.Title,
              imageS: singleItem.Item.GalleryURL,
              imageL: singleItem.Item.PictureURL[0],
              price: singleItem.Item.ConvertedCurrentPrice.Value,
            })
          );
          let firstShop = category.data.slice(0, category.data.length / 3);  //splitting that data in 3 (to simulate 3 different shops)
          let secondShop = category.data.slice(category.data.length / 3, 2 * category.data.length / 3);
          let thirdShop = category.data.slice(2 * category.data.length / 3, category.data.length);

          finalState.push({ id: category.id, shops: [firstShop, secondShop, thirdShop] })
          
        });
        
    };
    category.map((e) => apiCall(e))
    this.setState({ items: finalState, loading: false })
  }

 */

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
