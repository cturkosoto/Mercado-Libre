import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Row } from 'antd';
import '../css/styles.scss';
import productsJson from '../productos.json';

class Breadcrumbs extends Component {
    render () {
        //var breadcrumb = this.props.breadcrumb;
        var breadcrumb = productsJson.categories;
        return (
            <Row type='flex' justify='center'>
                <div className='breadcrumb'>
                <Breadcrumb separator='>'>
                    {
                    breadcrumb && breadcrumb.map(breadcrumbItem => <Breadcrumb.Item key={`breadcrumb_${breadcrumbItem}`}>{breadcrumbItem}</Breadcrumb.Item>)
                    }
                </Breadcrumb>
                </div>
            </Row>
        )
    }
};

Breadcrumbs.propTypes = {
  breadcrumb: PropTypes.array.isRequired,
};

export default Breadcrumbs;