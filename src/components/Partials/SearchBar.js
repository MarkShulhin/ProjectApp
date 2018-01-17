import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
					placeholder="Enter the query"
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}

SearchBar.propTypes = {
	onSearchTermChange: PropTypes.func,
};

export default SearchBar;
