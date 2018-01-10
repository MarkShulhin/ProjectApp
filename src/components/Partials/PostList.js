import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { postsFetchData, postsLoadMore } from '../../actions/posts';
import PostPreview from './PostPreview';
import { apiPrefix } from '../../../server/config.json';
import '../../css/loader.css';
import '../../css/posts.css';

class PostList extends Component {
	componentDidMount() {
		if (this.props.posts.length === 0) {
			this.props.fetchData(`${apiPrefix}/posts`);
		}
	}

	render() {
		const { posts, loadMore, limit } = this.props;
		const visiblePosts = Object.values(posts);
		// Variable for later checking if limit is bigger than actual number of posts
		const { length } = visiblePosts;
		// Cutting off only posts we need to render
		visiblePosts.length = limit;

		return (
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
				<section class='posts'>
					{visiblePosts.map((post, id) => (
						<PostPreview key={id + 1} post={post} />
					))}
				</section>
				{/* If all posts were rendered, button will be removed */}
				{
					length !== limit ?
						<a class="p-btn load-btn" onClick={(e) => {
							e.preventDefault();
							loadMore(10);
						}}>Load more</a>
						: null
				}
			</main>
		);
	}
}

PostList.propTypes = {
	fetchData: PropTypes.func,
	loadMore: PropTypes.func,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool,
	posts: PropTypes.any,
	limit: PropTypes.number,
};

const mapStateToProps = state => ({
	posts: state.postsState.posts,
	hasErrored: state.postsState.hasErrored,
	isLoading: state.postsState.isLoading,
	limit: state.postsState.limit,
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(postsFetchData(url)),
	loadMore: limit => dispatch(postsLoadMore(limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
