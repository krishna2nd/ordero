import React, { PropTypes } from 'react';

import './index.css';

class CategoryItem extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <a href={`/categories/${info.type}`} className="link-item">
        <div className="cat-item">
          <div className="image">
            <img src={info.image} alt={info.title} />
          </div>
          <div className="details">
            <span className="title">{info.title}</span>
            <div>{info.description}</div>
          </div>
        </div>
      </a>
    );
  }
}

// Item.prototype = {
//  info: PropTypes.object
// };

export default CategoryItem;
