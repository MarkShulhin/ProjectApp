import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { postsFetchData } from '../../actions/posts';
import { apiPrefix } from '../../../server/config.json';
import '../../css/loader.css';
import '../../css/post.css';

class Post extends Component {
	componentDidMount() {
		if (this.props.posts.length === 0) {
			this.props.fetchData(`${apiPrefix}/posts`);
		}
	}
	render() {
		const { id } = this.props.match.params;
		const post = this.props.posts[`${id}`];

		if (!post) {
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
		return (
			<div class="post-wrapper">
				<main class="post">
					<Link to='/' class="post-arrow">
						<img src="../img/slider-left-arrow.svg"/>
						<span>Back to main</span>
					</Link>
					<h1 class="post-headline">{post.title}</h1>
					<img src={post.poster} class="post-poster" />
					<div class="post-body">
						{post.fullBody}
					</div>
					<blockquote class="post-quote">
						“{post.body}” — WikiLeaks
					</blockquote>
					<div class="post-body">
						{post.fullBody}
					</div>
					<p>Author: {post.author}</p>
				</main>
				<aside class="post-aside">
					<h5>Top stories</h5>
					<ul>
						<li>
							<a href="#">Your Company’s Culture is Who You Hire, Fire, and Promote</a>
						</li>
						<li>
							<a href="#">The magic of microcopy</a>
						</li>
						<li>
							<a href="#">How To Make Your Dreams Come True</a>
						</li>
					</ul>
				</aside>
			</div>
		);
	}
}

Post.propTypes = {
	fetchData: PropTypes.func,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool,
	posts: PropTypes.any,
	match: PropTypes.object,
};

const mapStateToProps = state => ({
	posts: state.postsState.posts,
	hasErrored: state.postsState.hasErrored,
	isLoading: state.postsState.isLoading,
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(postsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
