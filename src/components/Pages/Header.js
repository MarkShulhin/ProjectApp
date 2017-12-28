import React from 'react';
import logo from '../../img/logo.svg';
import NavBar from '../Partials/NavBar';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="logo">
					<img src={logo} alt="logo"/>
				</div>
				<NavBar/>
			</header>
		);
	}
}

