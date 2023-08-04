import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogAsync, selectCatalog } from '../store/catalogSlice';
import axios from 'axios';
import catalogData from '../catalog-data';
import {Card} from 'react-bootstrap'


const Main = () => {
// will need to fetch catalog info from state
// THEN just pull the products from that state. 

// map over each to create a card component for every product
    // const dispatch = useDispatch();
    // const catalog = useSelector(selectCatalog);

    // const products = catalog.products;
    // console.log(catalog)

    const products = catalogData.products;

    /// some of the products don't have an image, title, or author. need to make conditional
    return (
        <div>
            <div style={{textAlign: 'center'}}>
            <h1>Edelwiess Catalog Viewer</h1>
            <p>Browse our collection below!</p>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {products.map((product) => {
                const jacketCov = product.images ? product.images['0']['uri'] : 'https://img.freepik.com/free-vector/vector-blank-book-cover-isolated-white_1284-41904.jpg?w=2000';
                
                return (
                    <Card key={product.fullName + product.sku} style={{width: '40vw', margin: '2vh 3vw'}}>
                        <Card.Img src={jacketCov} style={{}}/>
                        <Card.Body>
                            <Card.Title>{product.name ? product.name : 'Title Unknown'}</Card.Title>
                            <Card.Text>By: {product.author ? product.author : 'Author Unknown'}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
            </div>
        </div>
        
    )
};

export default Main;