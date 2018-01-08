import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ActorPreview from './ActorPreview';

export default class ActorsList extends Component {
	render() {
		const { actors } = this.props;
		return (
			<ul class="tile-list">
				{Object.keys(actors).map(id => (
					<ActorPreview key={id} actor={actors[id]} url={id.toLowerCase()}/>
				))}
			</ul>
		);
	}
}

ActorsList.propTypes = {
	actors: PropTypes.array,
};
