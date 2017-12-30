import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
	render() {
		return (
			<div>
				<Link to='/'>Go back to Home page</Link>
				<div> Sorry, you get 404!</div>
				<div>Page that you looking for is not found</div>
			</div>
		);
	}
}
