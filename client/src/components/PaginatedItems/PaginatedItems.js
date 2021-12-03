import React from 'react';
import * as S from './PaginatedItems.styled';
import { useNavigate } from 'react-router-dom';
import { Container } from '../';

const PaginatedItems = ({ pageCount, page }) => {
	let navigate = useNavigate();

	const handlePageClick = (event) => {
		navigate(`/home/${event.selected + 1}`);
	};

	return (
		<Container>
			<S.SReactPaginate
				breakLabel='...'
				onPageChange={handlePageClick}
				pageRangeDisplayed={2}
				pageCount={Math.ceil(pageCount / 10)}
				renderOnZeroPageCount={null}
				nextLabel={'>'}
				previousLabel={'<'}
				initialPage={page - 1}
			/>
		</Container>
	);
};

export default PaginatedItems;
