import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Grid, Cell,
	Button, Icon,
	IconButton, DataTable, TableHeader,
	Tooltip, Chip, ChipContact
} from 'react-mdl';
import Buttons from '../../Purchase/Buttons';
import EmojiActions from '../../EmojiActions';

import './index.css'

class ShortInfo extends React.Component {
	render() {
		const { info } = this.props;
		return (
			<div className="short-info" >
				<Grid>
					<Cell col={4} >
						<img src={info.media.thumbs[0]} className="thumb" />
					</Cell>
					<Cell col={8} >
						<EmojiActions info={info} />

			  			<div className="details">
			  				<Link to={'/' + info.id} >
								<h4>{info.title}</h4>
								<i className="intro">{info.info}</i>
							</Link>
						  <br/>
						</div>
						<Tooltip label={
							<DataTable
								className="price-table"
								shadow={0}
								rows={info.priceTable}
								>
								
								<TableHeader numeric name="particulars" tooltip="" align="right" ></TableHeader>
								<TableHeader numeric name="price"  tooltip="Price pet unit" align="left" width={100} >Price</TableHeader>
							</DataTable>
						} position="right">
						<Chip>
						    <ChipContact className="mdl-color--red mdl-color-text--white">
						    	$
						    </ChipContact>
						    {info.price}
						</Chip>
						</Tooltip>
						<Buttons info={info} />
			  			
					</Cell>
				</Grid>

		</div>);
	}
}

const mapStateToProps = state => ({
  store: state,
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(ShortInfo);