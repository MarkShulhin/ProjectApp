import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
	render() {
		return (
			<div class="notFound">
				<div class='nf-title'> Sorry, you get 404!</div>
				<div class='nf-subtitle'>Page that you looking for is not found</div>
				<Link to='/' class='notFound-link'>Back to Home page</Link>
			</div>
		);
	}
}
