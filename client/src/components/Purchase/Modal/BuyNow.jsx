import React, { PropTypes } from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Icon, Button, DataTable, TableHeader} from 'react-mdl';

import './index.css'

class BuyNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
  	const item = this.props.info || { title: "testtt", priceTable: [
		{particulars: 'Item cost', price: '$ 10'},
		{particulars: 'Tax', price: '$ 2.22'},
		{particulars: 'Service charge', price: '$ 1'},
		{particulars: '', price: '$ 13.22'},
	],};
    return (
      <span>
      	<Button className='buy-now mdl-color--orange mdl-color-text--white' raised ripple colored onClick={this.handleOpenDialog} raised ripple>
			<Icon  name="trending_up" /> Order Now
		</Button>
        <Dialog
        	className="modal-buy-now"
        	open={this.state.openDialog} onCancel={this.handleCloseDialog}>
          <DialogTitle>Order details for {item.title}</DialogTitle>
          <DialogContent>
            <p>Your order for buying {item.title} is placed. Please keep note of below order id</p>
            <p> ORDER ID: LTR-123BC-RT134 </p>
            <br/>
            <h6>Price details</h6>
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
          </DialogContent>
          <DialogActions>
            <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

export default BuyNow;