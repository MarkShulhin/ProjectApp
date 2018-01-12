import React from 'react';
import { PropTypes } from 'prop-types';

const FilterLink = ({
	filter,
	children,
	onClick,
}) => (
	<a href="#"
		onClick={(e) => {
			e.preventDefault();
			onClick(filter);
		}}
	>
		{ children }
	</a>
);

FilterLink.propTypes = {
	filter: PropTypes.string,
	children: PropTypes.any,
	onClick: PropTypes.func,
};

export default FilterLink;
