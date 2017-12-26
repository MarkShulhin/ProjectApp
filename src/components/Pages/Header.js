import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
	render() {
		return (
			<nav class="menu" role="navigation">
				<ul class="menu-list">
					<li class="menu-item"><Link to="/">Home</Link></li>
					<li class="menu-item"><Link to="/actors">Actors</Link></li>
					<li class="menu-item"><Link to="/videos">Videos</Link></li>
					<li class="menu-item"><Link to="/music">Music</Link></li>
					<li class="menu-item"><Link to="/contacts">Contacts</Link></li>
				</ul>
			</nav>
		);
	}
}

