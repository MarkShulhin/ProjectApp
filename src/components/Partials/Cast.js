import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ActorPreview from './ActorPreview';

export default class Cast extends Component {
	render() {
		const { actors } = this.props;
		return (
			<ul class="tile-list">
				{Object.keys(actors).map(id => (
					<ActorPreview key={id} actor={actors[id]} />
				))}
			</ul>
		);
	}
}

Cast.propTypes = {
	actors: PropTypes.array,
};
