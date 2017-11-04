import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './modules/home';
import Item from './modules/item';
import Order, {Checkout} from './modules/order';
import CategoryList from './modules/category'


  // <Route exact path="/categories" component={Categories} />
            // <Route exact path="/menu" component={Menu}/>
            // <Route exact path="/menu/:item" component={Item}/>
            // 
            // <Route exact path="/billing" component={Order.Billing}/>
            // <Route exact path="/order" component={Order}/>
            
class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact  path='/' component={Home} />
            <Route exact  path='/order/checkout' component={Checkout}/>
            <Route exact  path='/categories/:category' component={CategoryList}  />
            <Route exact  path='/:item' component={Item}  />
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