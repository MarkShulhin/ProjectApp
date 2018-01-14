import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BreadCrumbs extends Component {
	renderCrumbs(location) {
		let paths = location.pathname.split('/');

		// remove the last element if there was a / at the end of the pathname
		paths = paths[paths.length - 1] === '' ? paths.slice(0, paths.length - 1) : paths;

		// remove the first element if the second one is an empty string which means that we are in the root of the website
		paths = paths[1] === '' ? paths.slice(1) : paths;

		const breadcrumb = paths.map((path, index) => {
			// Add the > symbol only between two links
			const arrow = index !== paths.length - 1 ? ' > ' : ' ';

			if (index === 0) {
				return (<li key={index}><Link to="/">Home</Link>{arrow}</li>);
			}

			// Current path is not clickable
			if (index === paths.length - 1) {
				return (<li key={index}><span>{path}</span></li>);
			}

			// Build the path for the current URL
			const url = `${paths.slice(0, index + 1).join('/')}`;

			// HTML structure for every link except the first
			return (<li key={index}><Link to={url}>{path}</Link>{arrow}</li>);
		});

		// Return a list of links
		return (<ul className="breadcrumbs-list">{breadcrumb}</ul>);
	}

	render() {
		const breadCrumbs = this.renderCrumbs(window.location);

		return (
			breadCrumbs
		);
	}
}
