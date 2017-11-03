import React, { PropTypes, Component } from 'react';
import Header from '../Header';
import Content from '../Content';
import LeftDrawer from '../Drawer/Left';

import './index.css';

class Layout extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="menu-box">
          <LeftDrawer />
        </div>
        <div className="main-box">
          <Header />
          <Content>
            {this.props.children}
          </Content>
        </div>
      </div>
    );
  }
}

// Layout.propTypes = {
//  // children: PropTypes.array
// };

export default Layout;
