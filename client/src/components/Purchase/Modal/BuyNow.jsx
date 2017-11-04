import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {Dialog, DialogTitle, DialogContent, DialogActions, Icon, Button, DataTable, TableHeader} from 'react-mdl';
import { buyNowItem, buyNowItemDone } from '../../../lib/actions';

import './index.css'

class BuyNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    const item = this.props.info;
    this.props.dispatch(buyNowItem(item.id))
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    const item = this.props.info;
    this.props.dispatch(buyNowItemDone(item.id))
    this.setState({
      openDialog: false
    });
  }

  render() {
  	const item = this.props.info || {};
    const order = this.props.store.orders.find(order => order.status === 'active') || {};
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
            <p> ORDER ID: {order.id} </p>
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


const mapStateToProps = state => {
  return {
    store: state,
  }
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(BuyNow);
