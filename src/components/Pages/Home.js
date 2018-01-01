import React from 'react';
import Header from './Header';
import Slider from '../Partials/Slider';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Slider />
			</div>
		);
	}
}
