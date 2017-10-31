import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './modules/home';
import Categories from './modules/categories';
import Trending from './modules/trending';
import MenuList from './modules/menu';
import ItemDetails from './modules/item';
import Checkout from './modules/checkout';
import Billing from './modules/billing';
import Order from './modules/order';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/menu" component={MenuList}/>
            <Route exact path="/menu/:item" component={ItemDetails}/>
            <Route exact path="/checkout" component={Checkout}/>
            <Route exact path="/billing" component={Billing}/>
            <Route exact path="/order" component={Order}/>
          </div>
        </Router>
    );
  }
}

const mapStateToProps = state => ({
  data: state,
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(App);