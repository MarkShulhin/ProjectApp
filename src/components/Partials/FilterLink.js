import React from 'react';
import { PropTypes } from 'prop-types';

const FilterLink = ({
	filter,
	currentFilter,
	children,
	onClick,
}) => {
	if (filter === currentFilter) {
		return <span>{children}</span>;
	}

	return (
		<a href="#"
			onClick={(e) => {
				e.preventDefault();
				onClick(filter);
			}}
		>
			{ children }
		</a>
	);
};

FilterLink.propTypes = {
	filter: PropTypes.string,
	currentFilter: PropTypes.string,
	children: PropTypes.any,
	onClick: PropTypes.func,
};

export default FilterLink;
