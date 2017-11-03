import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon, IconButton, DataTable, TableHeader} from 'react-mdl';
import Layout from '../../components/Layout';
import ShortInfo from '../../components/Item/ShortInfo'
import './index.css';

function CategoryList(props) {
  const category = props.selCategory ||  {
      title: "Yummy non-veg",
      image: "https://image.ibb.co/c8YJTG/unnamed_18.jpg",
      description: "sdsdsd sdss ds sds sdsd ",
      type: "non-veg",
    };
  const item = {
  	id: 'this-item-id',
	title: "Item name in detail log its some dummy",
	info: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
	description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,

	media: {
		cover: "http://drop.ndtv.com/albums/COOKS/corngallery/creolecorngallery.jpg",
		thumbs: [
			"http://drop.ndtv.com/albums/COOKS/corngallery/creolecorngallery.jpg",
			"http://drop.ndtv.com/albums/COOKS/corngallery/creolecorngallery.jpg",
			"http://drop.ndtv.com/albums/COOKS/corngallery/creolecorngallery.jpg"
		],
		large: [],
		video: []
	},
	recipie: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`,
	nutrition: [
					{calories: 'Saturated fat', quantity: 0, value: 0},
					{calories: 'Polyunsaturated fat', quantity: 0, value: 0},
					{calories: 'Monounsaturated fat', quantity: 0, value: 0},
					{calories: 'Cholesterol', quantity: 0, value: 0},
					{calories: 'Sodium', quantity: 0, value: 0},
					{calories: 'Potassium', quantity: 0, value: 0},
					{calories: 'Carbohydrate', quantity: 0, value: 0},
					{calories: 'Dietary fiber', quantity: 0, value: 0},
					{calories: 'Sugar', quantity: 0, value: 0},
					{calories: 'Vitamin A', quantity: 0, value: 0},
					{calories: 'Vitamin B-12', quantity: 0, value: 0},
					{calories: 'Protein', quantity: 0, value: 0},
					{calories: 'Vitamin B-6', quantity: 0, value: 0},
					{calories: 'Vitamin C', quantity: 0, value: 0},
					{calories: 'Iron', quantity: 0, value: 0},
					{calories: 'Magnesium', quantity: 0, value: 0}
				],
	like: 10,
	dislike: 1,
	price: 10,
	priceTable: [
		{particulars: 'Item cost', price: '$ 10'},
		{particulars: 'Tax', price: '$ 2.22'},
		{particulars: 'Service charge', price: '$ 1'},
		{particulars: '', price: '$ 13.22'},
	],
	offer: 'OFF 10%'

  };
  const items = [item, item, item, item]

  return (
	<Layout >
	  	<article className="categories">

	  	<h5>{category.title}</h5>
		<h6 style={{display:'inline-block'}}>{category.description}</h6>
		<span style={{float:'right', marginBottom:10}} >You have <b>{items.length}</b> cusines to enjoy </span>
		<hr/>
	  		{
	  			items.map(item => <ShortInfo info={item} />)
	  		}
		</article>
	</Layout>
  );
}

CategoryList.propTypes = {
};

export default CategoryList;