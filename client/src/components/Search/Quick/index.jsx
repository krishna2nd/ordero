/* eslint-disable flowtype/require-valid-file-annotation */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {Grid, Cell } from 'react-mdl';

import './index.css';

const QuickIcon = ({info}) => {
  return (
    <a className="link" href={`/categories/${info.category}`}>
      <div>
        <img src={info.icon} alt={info.title} />
        <span>{info.title}</span>
      </div>
    </a>
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
          
          {items.map((item, index) => <Cell className='quik-item' col={2}> <QuickIcon key={`${item.category}-${index}`} info={item} /></Cell>)}  
          
        </Grid>
      </div>
    );
  }
}

// LeftDrawer.prototype = {
//   // assets: PropTypes.object
// };

const mapStateToProps = state => {
  return {
    store: state,
  }
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(QuickSearch);

