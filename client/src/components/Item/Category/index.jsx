import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class CategoryItem extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <Link to={`/categories/${info.category}`} className="link-item">
        <div className="cat-item">
          <div className="image">
            <img src={info.icon} alt={info.title} />
          </div>
          <div className="details">
            <span className="title">{info.title}</span>
            <div>{info.description}</div>
          </div>
        </div>
      </Link>
    );
  }
}

// Item.prototype = {
//  info: PropTypes.object
// };

export default CategoryItem;
