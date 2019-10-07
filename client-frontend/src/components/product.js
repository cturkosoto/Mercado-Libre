import React, { Component } from 'react';
import { Row, Col } from 'antd';
import {  Link } from "react-router-dom";
import 'antd/dist/antd.css';
import '../css/styles.scss';

import freeShippinImg from  '../static/assets/ic_shipping.png';


class Product extends Component{
    render() {
        var product = this.props.product;
        const detailUrl = `/items/${product.id}`;
        return (
            <Row type='flex' justify='center' >
                {/*<Card  bodyStyle={bodyStyle} >*/}
                    <Row type='flex' justify='space-between' className='card-container-list'>
                        <Col span={5}>
                            <Link to={detailUrl} alt="imagenProd">
                                <img className='image-product' src={product.picture} alt="imagenProd"/>
                            </Link>
                        </Col>
                        <Col span={10} className='information-product-item'>
                            <Row type='flex' justify='start'>
                                <Col span={8} className='price-product-box'>
                                    <a href={detailUrl} alt-text="logo">
                                    <p className='price-product-item'>
                                        $ {Math.trunc(product.price.amount).toLocaleString()}
                                    </p>
                                    </a>
                                </Col>
                                <Col span={4}>
                                {
                                    product.free_shipping && <img className='image-shipping' src={freeShippinImg} alt="imgShipping" />
                                }
                                </Col>
                            </Row>
                            <Row>
                                <a href={detailUrl} alt-text="titulo">
                                    <span className='title-product-item'>
                                    {product.title}
                                    </span>
                                </a>
                            </Row>
                        </Col>
                        <Col span={5} className='information-product-item'>
                            <p className='address'>{product.address}</p>
                        </Col>
                    </Row>
                {/*</Card>*/}
            </Row>
        );
    }
}


export default Product;