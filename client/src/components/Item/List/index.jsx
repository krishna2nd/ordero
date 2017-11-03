import React, { PropTypes } from 'react';

import './index.css';

class ListItem extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <a href={`/${info.id}`} className="link-item">
        <div className="list-item">
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

export default ListItem;
