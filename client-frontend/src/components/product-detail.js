import React, { Component } from 'react';
import {Card, Row, Col, Button, Typography } from 'antd';
//import PropTypes from 'prop-types';
import '../css/styles.scss';
import productJson from '../product.json';

const { Text } = Typography;

class ProductDetail extends Component {
  render () {
    const { params } = this.props.match;
    console.log(params);
    var product = productJson.item;
    console.log(product);
    return (
      <Row type='flex' justify='center'>
        <Card className='card-container-detail'>
          <Row>
            <Col span={16} >
              <img className='product-image' src={product.picture} alt=""/>
            </Col>
            <Col span={8} className='product-detail-box'>
              <p className='subtitle-product-detail'>{product.condition} - {product.sold_quantity} vendidos </p>
              <h1 className='title-product-detail'>
                {product.title}
              </h1>
              <h1 className='price-product-detail'>
                $ {Math.trunc(product.price.amount).toLocaleString()}
              
                <span className='decimals'>{product.price.decimals}</span>
              </h1>
              <Button type='primary' value='large' block>Comprar</Button>
            </Col>
          </Row>
          <Row className='description-box'>
            <Col span={16}>
              <h2 className='description-product-detail'>Descripción del Producto</h2>
              <Text>
                {product.description}
              </Text>
            </Col>
          </Row>
        </Card>
      </Row>
    );
  }
};

export default ProductDetail;