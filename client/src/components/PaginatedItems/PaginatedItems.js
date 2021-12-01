import React from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

const PaginatedItems = ({ pageCount }) => {
	let navigate = useNavigate();

	const handlePageClick = (event) => {
		navigate(`/home/${event.selected + 1}`);
	};

	return (
		<>
			{/* <Items currentItems={currentItems} /> */}
			<ReactPaginate
				breakLabel='...'
				onPageChange={handlePageClick}
				pageRangeDisplayed={2}
				pageCount={pageCount / 10}
				renderOnZeroPageCount={null}
			/>
		</>
	);
};

export default PaginatedItems;
