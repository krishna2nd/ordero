import React, { PropTypes } from 'react';
import {Button, Icon} from 'react-mdl';
import {BuyNow, MyBag} from '../Modal';
import './index.css'


class Buttons extends React.Component {
	render() {
		return (
			<div className="actions">
				<MyBag info={this.props.info} />
				<BuyNow  info={this.props.info} />
		 	 </div>
		);
	}
}

export default Buttons;