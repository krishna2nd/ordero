import React, { PropTypes } from 'react';

import './index.css';

class ListItem extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <a href={`/${info.id}`} className="link-item">
        <div className="lini-item">
          <div className="image">
            <img src={info.media.thumbs[0]} alt={info.title} />
          </div>
          <div className="details">
            <span className="title">{`${info.title.substr(0, 50)}`}</span>
            <div>{`${info.description.substr(0,80)}...`}</div>
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
