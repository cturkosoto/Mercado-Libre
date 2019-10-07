import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';       // Para que pueda seguir trabajando offline

import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductDetail from './components/product-detail';
import ProductList from './components/product-list';
import Breadcrumbs from './components/breadcrumbs';
const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/items" component={Breadcrumbs}/>
      <Route exact path="/items" component={ProductList} />
      <Route path="/items/:id" component={ProductDetail} />
    </div>
  </Router>
)

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
