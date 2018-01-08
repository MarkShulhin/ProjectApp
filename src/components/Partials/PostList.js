import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { postsFetchData } from '../../actions/posts';
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
		const { posts } = this.props;
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
					{Object.keys(posts).map(id => (
						<PostPreview key={id} post={posts[id]} />
					))}
				</section>
			</main>
		);
	}
}

PostList.propTypes = {
	fetchData: PropTypes.func,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool,
	posts: PropTypes.any,
};

const mapStateToProps = state => ({
	posts: state.postsState.posts,
	hasErrored: state.postsState.hasErrored,
	isLoading: state.postsState.isLoading,
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(postsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
