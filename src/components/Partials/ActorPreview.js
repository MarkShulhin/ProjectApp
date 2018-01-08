import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export default class ActorPreview extends Component {
	render() {
		const { actor, url } = this.props;
		const {
			title,
			subtitle,
			previewPic,
			alt,
		} = actor;
		return (
			<li>
				<Link to={`/actors/${url}`} class="img-container">
					<img src={previewPic} class="center-h" alt={alt} />
				</Link>
				<Link to={`/actors/${url}`} class="details">
					<strong>{title}</strong>
					<small>{subtitle}</small>
				</Link>
			</li>
		);
	}
}

ActorPreview.propTypes = {
	actor: PropTypes.any,
	url: PropTypes.string,
};
