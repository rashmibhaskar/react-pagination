import React from 'react';

const ReactPaginate = ({
	postsPerPage,
	totalPosts,
	currentPage,
	ppaginate,
	previousPage,
	nextPage,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div className="pagination-container">
			<ul className="pagination">
				<li onClick={previousPage} className="page-number">
					Prev
				</li>
				{pageNumbers.map((number) => (
					<li
						key={number}
						onClick={() => ppaginate(number)}
						className={
							'page-number ' + (number === currentPage ? 'active' : '')
						}
					>
						{number}
					</li>
				))}
				<li onClick={nextPage} className="page-number">
					Next
				</li>
			</ul>
		</div>
	);
};

export default ReactPaginate;
