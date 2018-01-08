import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { actorsFetchData } from '../../actions/actors';
import ActorsList from '../Partials/ActorsList';
import { apiPrefix } from '../../../server/config.json';
import '../../css/actors.css';

class Actors extends Component {
	componentDidMount() {
		if (this.props.actors.length === 0) {
			this.props.fetchData(`${apiPrefix}/actors`);
		}
	}
	render() {
		const { actors } = this.props;
		return (
			<section class="actors-content">
				<header class="actors-head">
					<h1 class="actors-label">Actors</h1>
				</header>
				{
					this.props.hasErrored ?
						<p>Sorry! There was an error loading the actors</p>
						: null}
				{
					this.props.isLoading ?
						<div class="sk-folding-cube">
							<div class="sk-cube1 sk-cube"></div>
							<div class="sk-cube2 sk-cube"></div>
							<div class="sk-cube4 sk-cube"></div>
							<div class="sk-cube3 sk-cube"></div>
						</div>
						: null
				}
				<ActorsList actors={actors} />
			</section>
		);
	}
}

Actors.propTypes = {
	fetchData: PropTypes.func,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool,
	actors: PropTypes.any,
};

const mapStateToProps = state => ({
	actors: state.actorsState.actors,
	hasErrored: state.actorsState.hasErrored,
	isLoading: state.actorsState.isLoading,
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(actorsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Actors);
