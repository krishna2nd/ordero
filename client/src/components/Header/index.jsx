import React, { Component } from 'react';
import {Grid, Cell, Icon} from 'react-mdl';
import  './index.css';

class Header extends Component {
  constructor() {
    super();
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

    return (
      <header className="header">
        <Grid noSpacing={true}>
          <Cell col={2} align="bottom">
            <a href='/'>
              <Icon name="home" className="home" />
            </a>
            <a href="/order/checkout">
              <Icon name="shopping_basket" className="basket" />
              <i className="count">12</i>
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

export default Header;