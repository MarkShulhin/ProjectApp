import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { postsFetchData } from '../../actions/posts';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchData('assets/posts.json');
	}

	render() {
		if (this.props.hasErrored) {
			return <p>Sorry! There was an error loading the posts</p>;
		}

		if (this.props.isLoading) {
			return <p>Loading…</p>;
		}

		return (
			<ul>
				{this.props.posts.map(post => (
					<li key={post.id}>
						{post.label}
					</li>
				))}
			</ul>
		);
	}
}

PostList.propTypes = {
	fetchData: PropTypes.func,
	hasErrored: PropTypes.bool,
	isLoading: PropTypes.bool,
	posts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
	posts: state.postsState.posts,
	hasErrored: state.postsState.postsHasErrored,
	isLoading: state.postsState.postsIsLoading,
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(postsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
