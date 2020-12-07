import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ApiContext = React.createContext();

const DataProvider = props => {

    const [data, setData] = useState([]);

    const [menClothing, setMenClothing] = useState([]);

    const [womenClothing, setWomenClothing] = useState([]);

    const [jewelery, setJewelery] = useState([]);

    const [electronics, setElectronics] = useState([]);

    const [loading, setLoading] = useState(false);

    const _apiBase = 'https://fakestoreapi.com/products/';

    const getResourse = async (url) => {
        const _apiBase = 'https://fakestoreapi.com/products/';

        setLoading(true);
        const fetchData = async () => {
            const data = await axios.get(`${_apiBase}/${url}`);
            setData(data.data);
            setLoading(false);
        }
        fetchData();
        setLoading(false);
        }

    // useEffect(() => {
    //    getResourse();
    // }, [])

    const getAll = () => {
        const res = getResourse('');
        console.log(data.data)
        setData(res.data);
    }

    const getSingleProduct = async (id) => {
        const product = await getResourse(`/${id}`);
        setData(product);
    }

    const getByCategory = async (category) => {
        const res = getResourse(`category/${category}`);
        setData(res.data);
    }

    return (
        <ApiContext.Provider value={{ data, loading, getAll, getSingleProduct, getByCategory }}>
            {props.children}
        </ApiContext.Provider>
    )

}

export default DataProvider;
