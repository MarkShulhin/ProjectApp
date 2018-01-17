import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { actorsFetchData } from '../../actions/actors';
import { apiPrefix } from '../../../server/config.json';
import Cast from './Cast';
import BreadCrumbs from './BreadCrumbs';

class Actor extends Component {
	componentDidMount() {
		if (this.props.actors.length === 0) {
			// Looks like something is being fetched from far away.
			setTimeout(() => {
				this.props.fetchData(`${apiPrefix}/actors`);
			}, 1000);
		}
	}

	componentWillMount() {
		// Scroll to top when navigating from 'More cast' links.
		window.scrollTo(0, 0);
	}

	componentDidUpdate() {
		window.scrollTo(0, 0);
	}

	// Filter the actors list that current actor isn`t in the list.
	getMoreCast() {
		const { hero } = this.props.match.params;
		const { actors } = this.props;
		return Object.keys(actors)
			.filter(key => key !== hero)
			.map(key => actors[key]);
	}

	render() {
		const { hero } = this.props.match.params;
		const { actors } = this.props;
		const actor = actors[`${hero}`];
		const moreCast = this.getMoreCast();

		if (!actor) {
			return (
				<main class="post">
					<div class="sk-folding-cube">
						<div class="sk-cube1 sk-cube"></div>
						<div class="sk-cube2 sk-cube"></div>
						<div class="sk-cube4 sk-cube"></div>
						<div class="sk-cube3 sk-cube"></div>
					</div>
				</main>
			);
		}
		const {
			title,
			subtitle,
			heroInfo,
			actorName,
			actorInfo,
			poster,
			alt,
		} = actor;
		return (
			<div className="main-container">
				<section class="main-content">
					<BreadCrumbs />
					<header class="section-head">
						<h1 class="section-label">Cast</h1>
					</header>
					<div class="article-container">
						<figure class="item-img-container">
							<img class="responsive-img" src={poster} alt={alt} />
						</figure>
						<article class="main-article">
							<header class="article-title">
								<h1>
									<strong>{title}</strong>
									<small>{subtitle}</small>
								</h1>
							</header>
							<p>{heroInfo}</p>
							<p>
								<strong>&nbsp;</strong>
							</p>
							<p>
								<strong>{actorName}</strong>
							</p>
							<p>
								{actorInfo}
							</p>
						</article>
					</div>

				</section>
				<div class="extra-wrapper"></div>
				<section class="main-content">
					<header class="section-head">
						<h1 class="section-label">More Cast</h1>
					</header>
					<Cast actors={moreCast} />
				</section>
			</div>
		);
	}
}

Actor.propTypes = {
	fetchData: PropTypes.func,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool,
	actors: PropTypes.any,
	match: PropTypes.object,
};

const mapStateToProps = state => ({
	actors: state.actorsState.actors,
	hasErrored: state.actorsState.hasErrored,
	isLoading: state.actorsState.isLoading,
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(actorsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Actor);
