import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import NavBar from '../Partials/NavBar';

export default class Header extends Component {
	render() {
		return (
			<header class='app-header'>
				<div className="logo">
					<img src={logo} alt="logo"/>
				</div>
				<NavBar/>
			</header>
		);
	}
}

