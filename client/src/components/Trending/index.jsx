/* eslint-disable flowtype/require-valid-file-annotation */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {Grid, Cell } from 'react-mdl';
import Lini from '../Item/Lini';

import './index.css';

class Trending extends React.Component {
  render() {
    const imgHeader = 'https://image.ibb.co/b1jsoG/unnamed_19.jpg'; //this.props.assets.headerImage;
    const item = {
      title: "Yummy non-veg",
      image: "https://image.ibb.co/c8YJTG/unnamed_18.jpg",
      description: "sdsdsd sdss ds sds sdsd ",
      id: "idoftheitem",
    }
    const allItems = this.props.store.items;
    const items = allItems.sort((a, b) => a - b).slice(0, 4)
    const col = (12/2);

    return (
      <div className="lini">
        <h4>Trending cusines </h4>
        <b>Explore curated lists of top cusines based on trends</b>
        <Grid>
          {items.map((item, index) => <Cell col={col}> <Lini key={`${item.title}-${index}`} info={item} /></Cell>)}  
        </Grid>
      </div>
    );
  }
}

// LeftDrawer.prototype = {
//   // assets: PropTypes.object
// };

const mapStateToProps = state => ({
  store: state,
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Trending);