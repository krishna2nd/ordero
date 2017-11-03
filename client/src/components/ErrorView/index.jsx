import React from 'react';
import { Grid, Cell } from 'react-mdl'
import './index.css';

class ErrorView extends React.Component {
	render() {
		return (
		<div className="error">
			<Grid>
				<Cell col={8}>
					<img  src='https://b.zmtcdn.com/images/z404x2.png' />
				</Cell>
				<Cell col={4}>
					<h5>Oops something went wrong..</h5>
					<p>
						<i>Coud you please inform our contact center so that the issue never repeat again</i>
					</p>
					<b>Sit back relax, do a talk with friends and try again later..</b>
				</Cell>
			</Grid>
		</div>);
	}
}

export default ErrorView;