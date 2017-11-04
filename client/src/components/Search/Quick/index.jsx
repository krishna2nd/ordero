/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Grid, Cell } from 'react-mdl';

import './index.css';

const QuickIcon = ({info}) => {
  return (
    <Link className="link" to={`/categories/${info.category}`}>
      <div>
        <img src={info.icon} alt={info.title} />
        <span>{info.title}</span>
      </div>
    </Link>
    )
}

class QuickSearch extends React.Component {
  render() {
    const imgHeader = this.props.headerImage;
    const items = this.props.store.categories || [];
    return (
      <div className="quik">
        <h4>Quick Searches</h4>
        <b>Discover your cusines by type of meal</b>
        <Grid>
          
          {items.map((item, index) => <Cell key={`${item.category}-${index}-c`} className='quik-item' col={2}> <QuickIcon key={`${item.category}-${index}`} info={item} /></Cell>)}  
          
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuickSearch);

