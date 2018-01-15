import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { navToggleMenu } from '../../actions/navbar';

export class NavBar extends Component {
	render() {
		const { condition, toggleMenu } = this.props;
		return (
			<nav class={condition ? 'menu active' : 'menu'}
				role="navigation"
			>
				<div class="hamburger"
					onClick={() => { toggleMenu(); }}
				><i></i></div>
				<ul class="flex-nav">
					<li class="nav-item"><Link to="/">Home</Link></li>
					<li class="nav-item"><Link to="/actors">Actors</Link></li>
					<li class="nav-item"><Link to="/videos">Videos</Link></li>
					<li class="nav-item"><Link to="/contacts">Contacts</Link></li>
				</ul>
			</nav>
		);
	}
}

NavBar.propTypes = {
	condition: PropTypes.bool,
	toggleMenu: PropTypes.func,
};

// Posts being filtered before passing to props
const mapStateToProps = state => ({
	condition: state.navState.condition,
});

const mapDispatchToProps = dispatch => ({
	toggleMenu: () => dispatch(navToggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

