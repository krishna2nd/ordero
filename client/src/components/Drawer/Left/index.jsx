/* eslint-disable flowtype/require-valid-file-annotation */

import React, { PropTypes } from 'react';
import CategoryItem from '../../Item/Category';

import './index.css';

class LeftDrawer extends React.Component {
  render() {
    const imgHeader = 'https://image.ibb.co/b1jsoG/unnamed_19.jpg'; //this.props.assets.headerImage;
    const category = {
      title: "Yummy non-veg",
      image: "https://image.ibb.co/c8YJTG/unnamed_18.jpg",
      description: "sdsdsd sdss ds sds sdsd ",
      type: "non-veg",
    }
    const categories = [category, category, category, category];
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

// LeftDrawer.prototype = {
//   // assets: PropTypes.object
// };

export default LeftDrawer;
