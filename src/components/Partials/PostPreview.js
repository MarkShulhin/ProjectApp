import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


export default class PostPreview extends Component {
	render() {
		const {
			title, body, author, comments, id,
		} = this.props.post;

		return (
			<article class="posts__item">
				<h2>{title}</h2>
				<p>{body}</p>
				<p><Link to={`/posts/${id}`} class="p-btn">Read More</Link></p>
				<footer class="posts-info">
					<span>By {author}</span>
					<span>{comments} comments</span>
				</footer>
			</article>
		);
	}
}
PostPreview.propTypes = {
	post: PropTypes.object,
};

