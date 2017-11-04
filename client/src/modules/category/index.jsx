import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Button, Icon, IconButton, DataTable, TableHeader} from 'react-mdl';
import Layout from '../../components/Layout';
import ShortInfo from '../../components/Item/ShortInfo'
import './index.css';

function CategoryList(props) {
console.log(props)
  const paramCat= props.match.params.category;
  const categories = props.store.categories;
  const category = categories.filter(cat => (cat.category === paramCat) ? cat : undefined)
  const items = category[0].items;

  return (
	<Layout >
	  	<article className="categories">

	  	<h5>{category.title}</h5>
		<h6 style={{display:'inline-block'}}>{category.description}</h6>
		<span style={{float:'right', marginBottom:10}} >You have <b>{items.length}</b> cusines to enjoy </span>
		<hr/>
	  		{
	  			items.map((item, index) => <ShortInfo key={index} info={item} />)
	  		}
		</article>
	</Layout>
  );
}

CategoryList.propTypes = {
};


const mapStateToProps = state => {
  return {
    store: state,
  }
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
