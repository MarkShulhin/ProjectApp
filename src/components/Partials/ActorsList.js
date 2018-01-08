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
				{/* <li>
					<a href="#" class="img-container">
						<img src="http://cdn.watch.aetnd.com/prod.cdn.watch.aetnd.com.s3.amazonaws.com/sites/2/2016/10/vikings_season4_cast_ragnar_16_9.jpg?w=548" class="center-h" alt="Travis Fimmel as Ragnar, Vikings"/>
					</a>
					<a href="#" class="details">
						<strong>Ragnar</strong>
						<small>Played by Travis Fimmel</small>
					</a>
				</li> */}
			</ul>
		);
	}
}

ActorsList.propTypes = {
	actors: PropTypes.array,
};
