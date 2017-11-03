import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon, IconButton, DataTable, TableHeader} from 'react-mdl';
import Layout from '../../components/Layout';
import DetailInfo from '../../components/Item/DetailInfo';
import './index.css';

function Item(props) {
  const item = {
  	id: 'this-item-id',
	title: "Item name in detail log its some dummy",
	info: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
	description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,

	image: "https://b.zmtcdn.com/data/collections/1d740363eb97d43e66aaed5111eeca42_1506060192.jpg",
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

  return (
	<Layout >
		<DetailInfo item={item} />
	</Layout>
  );
}

Item.propTypes = {
};

export default Item;