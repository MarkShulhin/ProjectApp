import React, { Component } from 'react';
// import Header from './Header';
import Slider from '../Partials/Slider';
import PostList from '../Partials/PostList';
// import Footer from './Footer';

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
