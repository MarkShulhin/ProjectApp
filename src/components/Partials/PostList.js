import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import PostPreview from './PostPreview';
import { apiPrefix } from '../../../server/config.json';
import {
	postsFetchData,
	postsLoadMore,
	postsSearch,
	postsResetLimit,
} from '../../actions/posts';
import '../../css/loader.css';
import '../../css/posts.css';

class PostList extends Component {
	componentDidMount() {
		if (this.props.posts.length === 0) {
			this.props.fetchData(`${apiPrefix}/posts`);
		}
	}

	componentWillUnmount() {
		this.props.resetLimit();
	}

	getVisiblePosts() {
		const { posts, limit } = this.props;
		const visiblePosts = [...posts];
		// Cutting off only posts we need to render
		visiblePosts.length = limit;
		return visiblePosts;
	}

	scrollToTop() {
		this.postsSection.scroll({
			top: 0,
			behavior: 'smooth',
		});
	}

	render() {
		const {
			posts,
			loadMore,
			limit,
			searchPosts,
		} = this.props;
		// Variable for later checking if limit is bigger than actual number of posts
		const initialLength = posts.length;
		const visiblePosts = this.getVisiblePosts();

		return (
			<div>
				<div class="search-bar">
					<input type="text"
						placeholder="Type here to search"
						ref={(input) => { this.searchInput = input; }}
						onChange={() => {
							searchPosts(this.searchInput.value);
							this.scrollToTop();
						}}
					/>
				</div>
				<main class="main-posts">
					{
						this.props.hasErrored ?
							<p>Sorry! There was an error loading the posts</p>
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

					<section class='posts' ref={(section) => { this.postsSection = section; }}>
						{
							visiblePosts.length !== 0 ?
								visiblePosts.map((post, id) => (
									<PostPreview key={id + 1} post={post} />
								))
								: <div>No Matches</div>
						}
						{/* If all posts were rendered, button will be removed */}
						{
							initialLength > limit && initialLength > 10 ?
								<div class="load-btn">
									<a class="p-btn" onClick={(e) => {
										e.preventDefault();
										loadMore(10);
									}}>Load more</a>
								</div>
								:
								<div class="load-btn">
									<a class="p-btn back" onClick={(e) => {
										e.preventDefault();
										this.scrollToTop();
									}}>Back To Top</a>
								</div>
						}
					</section>
				</main>
			</div>
		);
	}
}

PostList.propTypes = {
	fetchData: PropTypes.func,
	loadMore: PropTypes.func,
	resetLimit: PropTypes.func,
	searchPosts: PropTypes.func,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool,
	posts: PropTypes.any,
	limit: PropTypes.number,
};

const mapStateToProps = state => ({
	posts: Object.values(state.postsState.posts)
		.filter(post => post.title.toLowerCase().includes(state.postsState.searchFilter.toLowerCase())),
	hasErrored: state.postsState.hasErrored,
	isLoading: state.postsState.isLoading,
	limit: state.postsState.limit,
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(postsFetchData(url)),
	loadMore: limit => dispatch(postsLoadMore(limit)),
	resetLimit: () => dispatch(postsResetLimit()),
	searchPosts: searchFilter => dispatch(postsSearch(searchFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
