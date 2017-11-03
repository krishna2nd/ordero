/* eslint-disable flowtype/require-valid-file-annotation */

import React, { PropTypes } from 'react';
import {Grid, Cell } from 'react-mdl';

import './index.css';

const QuickIcon = ({info}) => {
  return (
    <a className="link" href={`/categories/${info.category||info.type}`}>
      <div>
        <img src={info.image} alt={info.title} />
        <span>{info.title}</span>
      </div>
    </a>
    )
}

class QuickSearch extends React.Component {
  render() {
    const imgHeader = 'https://image.ibb.co/b1jsoG/unnamed_19.jpg'; //this.props.assets.headerImage;
    const items = [
    {
      category: 'cafe',
      title: "Cafe's",
      image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png'
    },
    {
      category: 'non-veg',
      title: "Non Veg",
      image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/special_14.png'
    },
    {
      category: 'veg',
      title: "Vegetarion",
      image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png'
    },
    {
      category: 'beverages',
      title: "Beverages",
      image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png'
    },
    {
      category: 'salad',
      title: "Salad",
      image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png'
    },
    {
      category: 'deserts',
      title: "Sweets / Deserts",
      image: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_5.png'
    }];

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

export default QuickSearch;
