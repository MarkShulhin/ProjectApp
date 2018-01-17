import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from '../Partials/SearchBar';
import VideoList from '../Partials/VideoList';
import VideoDetail from '../Partials/VideoDetail';
import BreadCrumbs from '../Partials/BreadCrumbs';
import '../../css/videos.css';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

// Lodash debounce polyfill here because I do not want an additional dependency
function debounce(func, wait, immediate) {
	let timeout;
	return function hof(...args) {
		const context = this;
		const later = function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
export default class Videos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
		};

		this.videoSearch('Vikings Official');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term }, (videos) => {
			this.setState({
				videos,
				selectedVideo: videos[0],
			});
		});
	}

	render() {
		const videoSearch = debounce((term) => {
			this.videoSearch(term);
		}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<section class="main-content">
					<header class="section-head">
						<BreadCrumbs />
					</header>
					<div class="videos-section">
						<VideoDetail video={this.state.selectedVideo} />
						<aside class="sidebar">
							<h1 class="section-label">Related videos</h1>
							<VideoList
								onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
								videos={this.state.videos}
							/>
						</aside>
					</div>
				</section>
			</div>
		);
	}
}
