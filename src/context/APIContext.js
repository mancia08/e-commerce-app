import { render } from "@testing-library/react";
import React, { Component } from "react";
export const MyAPIContext = React.createContext();

const APIkey = process.env.REACT_APP_EBAY_KEY;

class MyAPIProvider extends Component {
  state = {
    items: [
      {
        id: "181033",
        shops: [
          [
            {
              name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
              imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
              price: 25.99,
            },
            {
              name: "Garden Tools Set-6 Piece Cast-Aluminum Heavy Duty Gardening Kits",
              imageS: "https://thumbs4.ebaystatic.com/pict/2647846958198080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/aVAAAOSwPIJe~~Lt/$_12.JPG?set_id=880000500F",
              price: 23.6,
            },
            {
              name: "Felco F-2 068780 Classic Manual Hand Pruner, F2!",
              imageS: "https://thumbs2.ebaystatic.com/pict/3632072632018080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/NzQyWDU1MA==/z/zAYAAOSwPzVfylhO/$_57.PNG?set_id=8800005007",
              price: 34,
            },
            {
              name: "23 in 1 Military Folding Shovel Survival Multi Tools Tactical Spade Camping Tool",
              imageS: "https://thumbs3.ebaystatic.com/pict/3131594843668080_2.jpg",
              imageL: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/U0MAAOSwHqdfbvTc/$_10.JPG?set_id=880000500F",
              price: 35.99,
            },
            {
              name: "Folding Garden Stool with Tool Bag and Digging Planting Tools Handle",
              imageS: "https://thumbs1.ebaystatic.com/pict/3917793828768080_4.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/FyYAAOSw8Vpdf5Jh/$_57.JPG?set_id=880000500F",
              price: 27.6,
            },
            {
              name: "Felco F2 Pruner High Performance Pruning Shears, GENUINE!!!",
              imageS: "https://thumbs1.ebaystatic.com/pict/1644638793808080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/Njk1WDEwNzg=/z/bUQAAOSwv-Ze-VdX/$_57.PNG?set_id=8800005007",
              price: 40,
            },
          ],
          [
            {
              name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
              imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
              price: 25.99,
            },
            {
              name: "Garden Tools Set-6 Piece Cast-Aluminum Heavy Duty Gardening Kits",
              imageS: "https://thumbs4.ebaystatic.com/pict/2647846958198080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/aVAAAOSwPIJe~~Lt/$_12.JPG?set_id=880000500F",
              price: 23.6,
            },
            {
              name: "Felco F-2 068780 Classic Manual Hand Pruner, F2!",
              imageS: "https://thumbs2.ebaystatic.com/pict/3632072632018080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/NzQyWDU1MA==/z/zAYAAOSwPzVfylhO/$_57.PNG?set_id=8800005007",
              price: 34,
            },
            {
              name: "23 in 1 Military Folding Shovel Survival Multi Tools Tactical Spade Camping Tool",
              imageS: "https://thumbs3.ebaystatic.com/pict/3131594843668080_2.jpg",
              imageL: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/U0MAAOSwHqdfbvTc/$_10.JPG?set_id=880000500F",
              price: 35.99,
            },
            {
              name: "Folding Garden Stool with Tool Bag and Digging Planting Tools Handle",
              imageS: "https://thumbs1.ebaystatic.com/pict/3917793828768080_4.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/FyYAAOSw8Vpdf5Jh/$_57.JPG?set_id=880000500F",
              price: 27.6,
            },
            {
              name: "Felco F2 Pruner High Performance Pruning Shears, GENUINE!!!",
              imageS: "https://thumbs1.ebaystatic.com/pict/1644638793808080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/Njk1WDEwNzg=/z/bUQAAOSwv-Ze-VdX/$_57.PNG?set_id=8800005007",
              price: 40,
            },
          ],
          [
            {
              name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
              imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
              price: 25.99,
            },
            {
              name: "Garden Tools Set-6 Piece Cast-Aluminum Heavy Duty Gardening Kits",
              imageS: "https://thumbs4.ebaystatic.com/pict/2647846958198080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/aVAAAOSwPIJe~~Lt/$_12.JPG?set_id=880000500F",
              price: 23.6,
            },
            {
              name: "Felco F-2 068780 Classic Manual Hand Pruner, F2!",
              imageS: "https://thumbs2.ebaystatic.com/pict/3632072632018080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/NzQyWDU1MA==/z/zAYAAOSwPzVfylhO/$_57.PNG?set_id=8800005007",
              price: 34,
            },
            {
              name: "23 in 1 Military Folding Shovel Survival Multi Tools Tactical Spade Camping Tool",
              imageS: "https://thumbs3.ebaystatic.com/pict/3131594843668080_2.jpg",
              imageL: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/U0MAAOSwHqdfbvTc/$_10.JPG?set_id=880000500F",
              price: 35.99,
            },
            {
              name: "Folding Garden Stool with Tool Bag and Digging Planting Tools Handle",
              imageS: "https://thumbs1.ebaystatic.com/pict/3917793828768080_4.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/FyYAAOSw8Vpdf5Jh/$_57.JPG?set_id=880000500F",
              price: 27.6,
            },
            {
              name: "Felco F2 Pruner High Performance Pruning Shears, GENUINE!!!",
              imageS: "https://thumbs1.ebaystatic.com/pict/1644638793808080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/Njk1WDEwNzg=/z/bUQAAOSwv-Ze-VdX/$_57.PNG?set_id=8800005007",
              price: 40,
            },
          ],
        ],
      },
      {
        id: "something",
        shops: [
          [
            {
              name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
              imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
              price: 25.99,
            },
            {
              name: "Garden Tools Set-6 Piece Cast-Aluminum Heavy Duty Gardening Kits",
              imageS: "https://thumbs4.ebaystatic.com/pict/2647846958198080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/aVAAAOSwPIJe~~Lt/$_12.JPG?set_id=880000500F",
              price: 23.6,
            },
            {
              name: "Felco F-2 068780 Classic Manual Hand Pruner, F2!",
              imageS: "https://thumbs2.ebaystatic.com/pict/3632072632018080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/NzQyWDU1MA==/z/zAYAAOSwPzVfylhO/$_57.PNG?set_id=8800005007",
              price: 34,
            },
            {
              name: "23 in 1 Military Folding Shovel Survival Multi Tools Tactical Spade Camping Tool",
              imageS: "https://thumbs3.ebaystatic.com/pict/3131594843668080_2.jpg",
              imageL: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/U0MAAOSwHqdfbvTc/$_10.JPG?set_id=880000500F",
              price: 35.99,
            },
            {
              name: "Folding Garden Stool with Tool Bag and Digging Planting Tools Handle",
              imageS: "https://thumbs1.ebaystatic.com/pict/3917793828768080_4.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/FyYAAOSw8Vpdf5Jh/$_57.JPG?set_id=880000500F",
              price: 27.6,
            },
            {
              name: "Felco F2 Pruner High Performance Pruning Shears, GENUINE!!!",
              imageS: "https://thumbs1.ebaystatic.com/pict/1644638793808080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/Njk1WDEwNzg=/z/bUQAAOSwv-Ze-VdX/$_57.PNG?set_id=8800005007",
              price: 40,
            },
          ],
          [
            {
              name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
              imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
              price: 25.99,
            },
            {
              name: "Garden Tools Set-6 Piece Cast-Aluminum Heavy Duty Gardening Kits",
              imageS: "https://thumbs4.ebaystatic.com/pict/2647846958198080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/aVAAAOSwPIJe~~Lt/$_12.JPG?set_id=880000500F",
              price: 23.6,
            },
            {
              name: "Felco F-2 068780 Classic Manual Hand Pruner, F2!",
              imageS: "https://thumbs2.ebaystatic.com/pict/3632072632018080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/NzQyWDU1MA==/z/zAYAAOSwPzVfylhO/$_57.PNG?set_id=8800005007",
              price: 34,
            },
            {
              name: "23 in 1 Military Folding Shovel Survival Multi Tools Tactical Spade Camping Tool",
              imageS: "https://thumbs3.ebaystatic.com/pict/3131594843668080_2.jpg",
              imageL: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/U0MAAOSwHqdfbvTc/$_10.JPG?set_id=880000500F",
              price: 35.99,
            },
            {
              name: "Folding Garden Stool with Tool Bag and Digging Planting Tools Handle",
              imageS: "https://thumbs1.ebaystatic.com/pict/3917793828768080_4.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/FyYAAOSw8Vpdf5Jh/$_57.JPG?set_id=880000500F",
              price: 27.6,
            },
            {
              name: "Felco F2 Pruner High Performance Pruning Shears, GENUINE!!!",
              imageS: "https://thumbs1.ebaystatic.com/pict/1644638793808080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/Njk1WDEwNzg=/z/bUQAAOSwv-Ze-VdX/$_57.PNG?set_id=8800005007",
              price: 40,
            },
          ],
          [
            {
              name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
              imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
              price: 25.99,
            },
            {
              name: "Garden Tools Set-6 Piece Cast-Aluminum Heavy Duty Gardening Kits",
              imageS: "https://thumbs4.ebaystatic.com/pict/2647846958198080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/aVAAAOSwPIJe~~Lt/$_12.JPG?set_id=880000500F",
              price: 23.6,
            },
            {
              name: "Felco F-2 068780 Classic Manual Hand Pruner, F2!",
              imageS: "https://thumbs2.ebaystatic.com/pict/3632072632018080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/NzQyWDU1MA==/z/zAYAAOSwPzVfylhO/$_57.PNG?set_id=8800005007",
              price: 34,
            },
            {
              name: "23 in 1 Military Folding Shovel Survival Multi Tools Tactical Spade Camping Tool",
              imageS: "https://thumbs3.ebaystatic.com/pict/3131594843668080_2.jpg",
              imageL: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/U0MAAOSwHqdfbvTc/$_10.JPG?set_id=880000500F",
              price: 35.99,
            },
            {
              name: "Folding Garden Stool with Tool Bag and Digging Planting Tools Handle",
              imageS: "https://thumbs1.ebaystatic.com/pict/3917793828768080_4.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/FyYAAOSw8Vpdf5Jh/$_57.JPG?set_id=880000500F",
              price: 27.6,
            },
            {
              name: "Felco F2 Pruner High Performance Pruning Shears, GENUINE!!!",
              imageS: "https://thumbs1.ebaystatic.com/pict/1644638793808080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/Njk1WDEwNzg=/z/bUQAAOSwv-Ze-VdX/$_57.PNG?set_id=8800005007",
              price: 40,
            },
          ],
        ],
      },
      {
        id: "something",
        shops: [
          [
            {
              name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
              imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
              price: 25.99,
            },
            {
              name: "Garden Tools Set-6 Piece Cast-Aluminum Heavy Duty Gardening Kits",
              imageS: "https://thumbs4.ebaystatic.com/pict/2647846958198080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/aVAAAOSwPIJe~~Lt/$_12.JPG?set_id=880000500F",
              price: 23.6,
            },
            {
              name: "Felco F-2 068780 Classic Manual Hand Pruner, F2!",
              imageS: "https://thumbs2.ebaystatic.com/pict/3632072632018080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/NzQyWDU1MA==/z/zAYAAOSwPzVfylhO/$_57.PNG?set_id=8800005007",
              price: 34,
            },
            {
              name: "23 in 1 Military Folding Shovel Survival Multi Tools Tactical Spade Camping Tool",
              imageS: "https://thumbs3.ebaystatic.com/pict/3131594843668080_2.jpg",
              imageL: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/U0MAAOSwHqdfbvTc/$_10.JPG?set_id=880000500F",
              price: 35.99,
            },
            {
              name: "Folding Garden Stool with Tool Bag and Digging Planting Tools Handle",
              imageS: "https://thumbs1.ebaystatic.com/pict/3917793828768080_4.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/FyYAAOSw8Vpdf5Jh/$_57.JPG?set_id=880000500F",
              price: 27.6,
            },
            {
              name: "Felco F2 Pruner High Performance Pruning Shears, GENUINE!!!",
              imageS: "https://thumbs1.ebaystatic.com/pict/1644638793808080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/Njk1WDEwNzg=/z/bUQAAOSwv-Ze-VdX/$_57.PNG?set_id=8800005007",
              price: 40,
            },
          ],
          [
            {
              name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
              imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
              price: 25.99,
            },
            {
              name: "Garden Tools Set-6 Piece Cast-Aluminum Heavy Duty Gardening Kits",
              imageS: "https://thumbs4.ebaystatic.com/pict/2647846958198080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/aVAAAOSwPIJe~~Lt/$_12.JPG?set_id=880000500F",
              price: 23.6,
            },
            {
              name: "Felco F-2 068780 Classic Manual Hand Pruner, F2!",
              imageS: "https://thumbs2.ebaystatic.com/pict/3632072632018080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/NzQyWDU1MA==/z/zAYAAOSwPzVfylhO/$_57.PNG?set_id=8800005007",
              price: 34,
            },
            {
              name: "23 in 1 Military Folding Shovel Survival Multi Tools Tactical Spade Camping Tool",
              imageS: "https://thumbs3.ebaystatic.com/pict/3131594843668080_2.jpg",
              imageL: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/U0MAAOSwHqdfbvTc/$_10.JPG?set_id=880000500F",
              price: 35.99,
            },
            {
              name: "Folding Garden Stool with Tool Bag and Digging Planting Tools Handle",
              imageS: "https://thumbs1.ebaystatic.com/pict/3917793828768080_4.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/FyYAAOSw8Vpdf5Jh/$_57.JPG?set_id=880000500F",
              price: 27.6,
            },
            {
              name: "Felco F2 Pruner High Performance Pruning Shears, GENUINE!!!",
              imageS: "https://thumbs1.ebaystatic.com/pict/1644638793808080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/Njk1WDEwNzg=/z/bUQAAOSwv-Ze-VdX/$_57.PNG?set_id=8800005007",
              price: 40,
            },
          ],
          [
            {
              name: "Bonsai Tool Steel Extensive  Set Carbon 14-pc Kit Cutter Scissors W/ Nylon Case",
              imageS: "https://thumbs1.ebaystatic.com/pict/3930425706848080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/5-EAAOSw8GZfyato/$_57.JPG?set_id=8800005007",
              price: 25.99,
            },
            {
              name: "Garden Tools Set-6 Piece Cast-Aluminum Heavy Duty Gardening Kits",
              imageS: "https://thumbs4.ebaystatic.com/pict/2647846958198080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/aVAAAOSwPIJe~~Lt/$_12.JPG?set_id=880000500F",
              price: 23.6,
            },
            {
              name: "Felco F-2 068780 Classic Manual Hand Pruner, F2!",
              imageS: "https://thumbs2.ebaystatic.com/pict/3632072632018080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/NzQyWDU1MA==/z/zAYAAOSwPzVfylhO/$_57.PNG?set_id=8800005007",
              price: 34,
            },
            {
              name: "23 in 1 Military Folding Shovel Survival Multi Tools Tactical Spade Camping Tool",
              imageS: "https://thumbs3.ebaystatic.com/pict/3131594843668080_2.jpg",
              imageL: "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/U0MAAOSwHqdfbvTc/$_10.JPG?set_id=880000500F",
              price: 35.99,
            },
            {
              name: "Folding Garden Stool with Tool Bag and Digging Planting Tools Handle",
              imageS: "https://thumbs1.ebaystatic.com/pict/3917793828768080_4.jpg",
              imageL: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/FyYAAOSw8Vpdf5Jh/$_57.JPG?set_id=880000500F",
              price: 27.6,
            },
            {
              name: "Felco F2 Pruner High Performance Pruning Shears, GENUINE!!!",
              imageS: "https://thumbs1.ebaystatic.com/pict/1644638793808080_1.jpg",
              imageL: "https://i.ebayimg.com/00/s/Njk1WDEwNzg=/z/bUQAAOSwv-Ze-VdX/$_57.PNG?set_id=8800005007",
              price: 40,
            },
          ],
        ],
      },
    ],
    pathLinks: [],
    loding: false,
  };

   /* componentDidMount() {
    const itemsPerShop = 6; //keep this number = 1 during production. NOTE we do 3*(3n+1) API calls
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
        .then(result => { //second API call (getting data info from item ID)
          const dataPromisesArray = result.map(items =>
            fetch(`${itemUrl}${items.itemId}`)
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
  } */


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