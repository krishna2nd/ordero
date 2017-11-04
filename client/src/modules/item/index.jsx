import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Button, Icon, IconButton, DataTable, TableHeader} from 'react-mdl';
import Layout from '../../components/Layout';
import DetailInfo from '../../components/Item/DetailInfo';
import './index.css';

function Item(props) {
	const id = props.match.params.item;
	const item = props.store.items.find(ele => ele.id == id);
	return (
		<Layout >
			<DetailInfo item={item} />
		</Layout>
	);
}

Item.propTypes = {
};

const mapStateToProps = state => {
  return {
    store: state,
  }
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Item);
