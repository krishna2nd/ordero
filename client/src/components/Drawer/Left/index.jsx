/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import {connect} from 'react-redux';
import CategoryItem from '../../Item/Category';

import './index.css';

class LeftDrawer extends React.Component {
  render() {
    const imgHeader = 'https://image.ibb.co/b1jsoG/unnamed_19.jpg'; //this.props.assets.headerImage;
    const categories = this.props.store.categories;
    return (
      <div className="drawer">
        <div
          className="header"
          style={{
            backgroundImage: `url(${imgHeader})`
          }}
        />
        {categories.map((category, index) => <CategoryItem key={`${category.title}-${index}`} info={category} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state,
  }
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);

