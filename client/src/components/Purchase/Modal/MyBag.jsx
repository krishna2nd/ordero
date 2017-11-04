import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {Icon, Snackbar, FABButton, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
import { addItemToBag } from  '../../../lib/actions';
import './index.css';

class MyBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSnackbarActive: false };
  }

  addToBag() {
    const item = this.props.info;
    this.props.dispatch(addItemToBag(item.id))
    this.setState({ isSnackbarActive: true });
  }

  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }

  render() {
    const item = this.props.info || { title: "testtt" }
    return (
      <span>
        <FABButton onClick={this.addToBag.bind(this)}  className='shopping mdl-color--green mdl-color-text--white' colored raised ripple >
          <Icon name='shopping_basket' />
        </FABButton >
        <Snackbar
          timeout={1500}
          active={this.state.isSnackbarActive}
          onTimeout={this.handleTimeoutSnackbar.bind(this)}>
            Your item {item.title} added to bag
        </Snackbar>
      </span>
    );
  }
}

const mapStateToProps = state => ({
  store: state,
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(MyBag);