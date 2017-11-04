import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-mdl';
import './index.css';

class EmojiActions extends React.Component {
	render() {
		const info = this.props.info;
		return (
			<span style={{float:'right'}} className="like-dislike">
				<Icon className="mdl-color-text--green medium" name="thumb_up" colored ripple />
				<span>{info.like}</span>
				<Icon className="mdl-color-text--red medium"  name="thumb_down" colored ripple />
				<span>{info.dislike}</span>
			</span>);
	}
}

export default EmojiActions;