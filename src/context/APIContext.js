import React, { useState, useEffect } from 'react';
import { items } from '../data/items';

//const APIkey = process.env.REACT_APP_EBAY_KEY;

export const MyContext = React.createContext();

const MyAPIProvider = (props) => {

  const [state, setState] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setState(items);
    setLoading(false);
  }, [])

 

  console.log(state)
    return (
      <MyContext.Provider value={{ state, loading }}>
        {props.children}
      </MyContext.Provider>
    );
}
export default MyAPIProvider;