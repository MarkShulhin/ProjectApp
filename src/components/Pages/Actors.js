import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { actorsFetchData, actorsSetFilter } from '../../actions/actors';
import Cast from '../Partials/Cast';
import FilterLink from '../Partials/FilterLink';
import BreadCrumbs from '../Partials/BreadCrumbs';
import { apiPrefix } from '../../../server/config.json';
import '../../css/actors.css';

class Actors extends Component {
	componentDidMount() {
		if (this.props.actors.length === 0) {
			this.props.fetchData(`${apiPrefix}/actors`);
		}
	}

	getVisibleActors() {
		const { actors, visibilityFilter } = this.props;
		const actorsArr = Object.values(actors);
		switch (visibilityFilter) {
		case 'SHOW_ALL':
			return actorsArr;
		case 'SHOW_MAIN':
			return actorsArr.filter(a => a.role === 'main');
		case 'SHOW_SECONDARY':
			return actorsArr.filter(a => a.role === 'secondary');
		default: return null;
		}
	}

	render() {
		const { setFilter, visibilityFilter } = this.props;
		const visibleActors = this.getVisibleActors();
		return (
			<section class="actors-content">
				<header class="actors-head">
					<BreadCrumbs />
					<h1 class="actors-label">Actors</h1>
					<div class="filter-block">
						Show:
						{' '}
						<FilterLink
							filter="SHOW_ALL"
							currentFilter={visibilityFilter}
							onClick={setFilter}
						>
							All
						</FilterLink>
						{' '}
						<FilterLink
							filter="SHOW_MAIN"
							currentFilter={visibilityFilter}
							onClick={setFilter}
						>
							Main
						</FilterLink>
						{' '}
						<FilterLink
							filter="SHOW_SECONDARY"
							currentFilter={visibilityFilter}
							onClick={setFilter}
						>
							Secondary
						</FilterLink>
					</div>
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
				<Cast actors={visibleActors} />
			</section>
		);
	}
}

Actors.propTypes = {
	fetchData: PropTypes.func,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool,
	actors: PropTypes.any,
	setFilter: PropTypes.func,
	visibilityFilter: PropTypes.string,
};

const mapStateToProps = state => ({
	actors: state.actorsState.actors,
	hasErrored: state.actorsState.hasErrored,
	isLoading: state.actorsState.isLoading,
	visibilityFilter: state.actorsState.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(actorsFetchData(url)),
	setFilter: filter => dispatch(actorsSetFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Actors);
