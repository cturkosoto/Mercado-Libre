import './css/styles.scss';
import React, { Component } from 'react';

//Components
import Nav from './components/nav';
//import ProductList from './components/product-list';
//import ProductDetail from './components/product-detail';
//import Breadcrumbs from './components/breadcrumbs';
//import products from './productos.json';
//import product from './product.json';

class App extends Component {
  render() {

    return (
      <div>
        <Nav />
        {/*<Breadcrumbs breadcrumb={products.categories}/>
        <ProductList products={products.items}/>
    <ProductDetail product={product.item}/>*/}
      </div>
    );
  }
}

export default App;
