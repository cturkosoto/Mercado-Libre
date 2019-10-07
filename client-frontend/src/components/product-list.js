import React, { Component } from 'react';
import '../css/styles.scss';
import Product from './product';
//import {List } from 'antd';
import productsJson from '../productos.json';


class ProductList extends Component {
    
    render() { 
        console.log(this.props.location.search.split('=')[1]);
        //var products = this.props.products;
        var products = productsJson.items;                
        return (
            <div>{ products.map((product, index) => <Product key={index} product={product} /> ) } </div>

        );
    }
}


export default ProductList;