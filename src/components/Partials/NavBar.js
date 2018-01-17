import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { navToggleMenu } from '../../actions/navbar';

export class NavBar extends Component {
	onClickNav() {
		this.props.toggleMenu();
	}

	componentDidMount() {
		this.navUl.addEventListener('click', this.onClickNav.bind(this), false);
	}

	componentWillUnmount() {
		this.navUl.removeEventListener('click', this.onClickNav.bind(this), false);
	}

	render() {
		const { condition, toggleMenu } = this.props;
		return (
			<nav class={condition ? 'menu active' : 'menu'}
				role="navigation"
			>
				<div class="hamburger"
					onClick={() => toggleMenu()}
				><i></i></div>
				<ul class="flex-nav" ref={(ul) => { this.navUl = ul; }}>
					<li class="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li class="nav-item sub">
						<Link to="/actors">Actors</Link>
						<ul class="submenu">
							<li><Link to="/actors/ragnar">Ragnar</Link></li>
							<li><Link to="/actors/bjorn">Bjorn</Link></li>
							<li><Link to="/actors/ivar-the-boneless">Ivar</Link></li>
						</ul>
					</li>
					<li class="nav-item">
						<Link to="/videos">Videos</Link>
					</li>
					<li class="nav-item">
						<Link to="/music">Music</Link>
					</li>
					<li class="nav-item">
						<Link to="/contacts">Contacts</Link>
					</li>
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

