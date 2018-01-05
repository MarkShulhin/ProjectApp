import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
	render() {
		return (
			<footer class="footer">
				<div class="copyright">
					<p>&copy; 2018 - From vikings with love</p>
				</div>
				<div class="social">
					<Link to="/contacts" class="support">Contact Us</Link>
					<a href="https://www.facebook.com/Vikings/" class="face">f</a>
					<a href="https://twitter.com/historyvikings" class="tweet">t</a>
					<a href="https://www.linkedin.com/vikings" class="linked">in</a>
				</div>
			</footer>
		);
	}
}
