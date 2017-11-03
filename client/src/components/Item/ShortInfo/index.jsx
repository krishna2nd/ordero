import React, { PropTypes } from 'react';
import {Grid, Cell, Button, Icon, IconButton, DataTable, TableHeader, Tooltip, Chip, ChipContact} from 'react-mdl';
import Buttons from '../../Purchase/Buttons';
import './index.css'

class ShortInfo extends React.Component {
	ViewItem(e) {
		const { info } = this.props;
		console.log(info);
		window.location.href = '/'+info.id;
	}
	render() {
		const { info } = this.props;
		return (
			<div className="short-info" >
				<Grid>
					<Cell col={4} >
						<img src={info.media.thumbs[0]} className="thumb" />
					</Cell>
					<Cell col={8} >
						<span style={{float:'right'}} className="like-dislike">
							    <Icon className="mdl-color-text--green medium" name="thumb_up" colored ripple />
							    <span>{info.like}</span>
							    <Icon className="mdl-color-text--red medium"  name="thumb_down" colored ripple />
							    <span>{info.dislike}</span>
			  			</span>

			  			<div className="details" onClick={this.ViewItem.bind(this)}>
							<h4>{info.title}</h4>
							<i className="intro">{info.info}</i>
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

ShortInfo.PropTypes = {

}
export default ShortInfo;