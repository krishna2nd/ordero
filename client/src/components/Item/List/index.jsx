import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class ListItem extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <Link to={`/${info.id}`} className="link-item">
        <div className="list-item">
          <div className="image">
            <img src={info.image} alt={info.title} />
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

export default ListItem;
