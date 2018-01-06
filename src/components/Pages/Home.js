import React, { Component } from 'react';
import Slider from '../Partials/Slider';
import PostList from '../Partials/PostList';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Slider />
				<PostList />
			</div>
		);
	}
}
