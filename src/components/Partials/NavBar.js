import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			condition: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			condition: !this.state.condition,
		});
	}
	render() {
		return (
			<nav class={this.state.condition ? 'menu active' : 'menu'}
				role="navigation"
				onClick={this.handleClick}
			>
				<div class="hamburger"><i></i></div>
				<ul class="flex-nav">
					<li class="nav-item"><Link to="/">Home</Link></li>
					<li class="nav-item"><Link to="/actors">Actors</Link></li>
					<li class="nav-item"><Link to="/videos">Videos</Link></li>
					<li class="nav-item"><Link to="/music">Music</Link></li>
					<li class="nav-item"><Link to="/contacts">Contacts</Link></li>
				</ul>
			</nav>
		);
	}
}

