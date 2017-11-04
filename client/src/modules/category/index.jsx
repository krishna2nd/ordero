import React from 'react';
import { connect } from 'react-redux';
import {Button, Icon, IconButton, DataTable, TableHeader} from 'react-mdl';
import Layout from '../../components/Layout';
import ShortInfo from '../../components/Item/ShortInfo'
import './index.css';

function CategoryList(props) {
  const paramCat= props.match.params.category;
  const categories = props.store.categories;
  const category = categories.find(cat => cat.category === paramCat)
  const items = category.items;
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

const mapStateToProps = state => {
  return {
    store: state,
  }
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
