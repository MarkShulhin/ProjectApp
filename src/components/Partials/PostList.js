import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { itemsFetchData } from '../../actions/items';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchData('assets/posts.json');
	}

	render() {
		if (this.props.hasErrored) {
			return <p>Sorry! There was an error loading the items</p>;
		}

		if (this.props.isLoading) {
			return <p>Loading…</p>;
		}

		return (
			<ul>
				{this.props.items.map(item => (
					<li key={item.id}>
						{item.label}
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
	items: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
	items: state.items,
	hasErrored: state.itemsHasErrored,
	isLoading: state.itemsIsLoading,
});

const mapDispatchToProps = dispatch => ({
	fetchData: url => dispatch(itemsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
