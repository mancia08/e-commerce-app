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