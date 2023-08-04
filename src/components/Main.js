import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogAsync, selectCatalog } from '../store/catalogSlice';
import axios from 'axios';


const Main = () => {
// will need to fetch catalog info from state
// THEN just pull the products from that state. 

// map over each to create a card component for every product
    const dispatch = useDispatch();
    const catalog = useSelector(selectCatalog);

    const products = catalog.products;
    console.log(catalog)


    return (
        <div>
            <h1>Test</h1>
        </div>
    )
};

export default Main;