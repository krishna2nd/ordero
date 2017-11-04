import React, { Component } from 'react';
import {Grid, Cell, Icon} from 'react-mdl';
import { connect } from 'react-redux';
import  './index.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false
    }
    this.isHidden = this.isHidden.bind(this);
  }
  componentDidMount() {
    var self = this;
    window.addEventListener('scroll', function(e) {
      const hidden = self.isHidden();
      if (window.scrollY > 150 && !hidden) {
        self.hide()
        return;
      }
      if (hidden && window.scrollY < 150 ) {
        self.show();
      }
    });
  }
  isHidden() {
    return this.state.hide;
  }
  show() {
    this.setState({
      hide: false
    });
  }
  hide() {
    this.setState({
      hide: true
    })
  }
  render() {
    if (this.state.hide) return null;
    const active = this.props.store.orders.find(order => order.status === 'active')
    const count = active && active.items.length;
    return (
      <header className="header">
        <Grid noSpacing={true}>
          <Cell col={2} align="bottom">
            <a href='/'>
              <Icon name="home" className="home" />
            </a>
            <a href="/order/checkout">
              <Icon name="shopping_basket" className="basket" />
              {
                count ? (<i className="count">{count}</i>) : null
              }
            </a>
          </Cell>
          <Cell col={6}></Cell>
          <Cell col={4} align="middle" >
            <h1 className='w-title'>
              Ordero
            </h1>
            <i> Trust and taste come to your home. </i>
          </Cell>
        </Grid>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  store: state,
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
