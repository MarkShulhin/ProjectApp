import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { musicFetchData, musicSetActiveIndex } from '../../actions/music';
import { apiPrefix } from '../../../server/config.json';
import AudioBubble from '../Partials/AudioBubble';
import BreadCrumbs from '../Partials/BreadCrumbs';
import '../../css/music.css';

export class Music extends Component {
	componentDidMount() {
		if (this.props.songs.length === 0) {
			this.props.fetchData(`${apiPrefix}/songs`);
		}
	}

	onComplete() {
		this.props.setIndex(null);
	}

	setActive(i) {
		const index = i === this.props.activeIndex ? null : i;
		this.props.setIndex(index);
	}

	render() {
		const { songs, activeIndex } = this.props;
		return (
			<div className="player">
				<BreadCrumbs />
				<h1 className="player__title">Songs from episodes</h1>
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
				<div className="player__items">
					{songs.map((audio, i) =>
						<AudioBubble
							active={activeIndex === i}
							key={audio.title}
							title={audio.title}
							subtitle={audio.subtitle}
							image={audio.image}
							audio={audio.audio}
							setActive={this.setActive.bind(this, i)}
							onComplete={this.onComplete.bind(this)}
						/>)}
				</div>
			</div>
		);
	}
}

Music.propTypes = {
	fetchData: PropTypes.func,
	setIndex: PropTypes.func,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool,
	songs: PropTypes.any,
	activeIndex: PropTypes.number,
};

const mapStateToProps = state => ({
	songs: state.musicState.songs,
	hasErrored: state.musicState.hasErrored,
	isLoading: state.musicState.isLoading,
	activeIndex: state.musicState.activeIndex,
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(musicFetchData(url)),
	setIndex: index => dispatch(musicSetActiveIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Music);
