import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../../Purchase/Buttons'
import {Button, Icon, IconButton, DataTable, TableHeader} from 'react-mdl';

import './index.css';

class DetailInfo extends React.Component {
	render() {
		const item = this.props.item;
		return (
		<div>
		<div className="item-cover" style={{
		backgroundImage: `url('${item.image}')`
	  }}></div>
	  <article>
		  <Buttons info={item} />
		  <div className="details">
			<h4>{item.title}</h4>
			<i className="intro">{item.info}</i>
		  <br/>
		  <br/>
		  <p>
			{item.description}
		  </p>

		  
		  <br/>
		  <h6>
		  Nutrition Facts (Amount Per 100 grams)
		  </h6>
		  <br/>
			<DataTable
				className="table"
				shadow={0}
				rows={item.nutrition}
				>
				<TableHeader name="calories" tooltip="">Calories</TableHeader>
				<TableHeader numeric name="quantity" cellFormatter={(quantity) => `${quantity}mg`} tooltip="">Quantity</TableHeader>
				<TableHeader numeric name="value" cellFormatter={(value) => `${value}%`} tooltip="Price pet unit">Price</TableHeader>
			</DataTable>
				
		  </div>

		  <br />
		  <div className="recipie" >
			{item.recipie}
		  </div>
		  <hr/>
		  <br/>
		  <h5>Item Cost </h5>
		  <br/>
		  <DataTable
				className="price-table"
				shadow={0}
				rows={item.priceTable}
				>
				
				<TableHeader numeric name="particulars" tooltip="" align="right" ></TableHeader>
				<TableHeader numeric name="price"  tooltip="Price pet unit" align="left" width={100} >Price</TableHeader>
			</DataTable>
		<br/>
		<br/>
		  <div className="actions">
			<Button raised accent ripple>
				<Icon  name="add_shopping_cart" /> Order Now
			</Button>
			<Button raised accent>
				<Icon name='add_box' /> Add to Bag
			</Button>
		  </div>
		</article></div>);
	}
}

export default DetailInfo;