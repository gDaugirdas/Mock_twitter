import React, { useEffect, useState } from 'react';
import * as S from './PaginatedItems.styled';
import { useNavigate } from 'react-router-dom';
import { Container } from '../';
import { useParams } from 'react-router-dom';

const PaginatedItems = ({ tweetsCount }) => {
	const navigate = useNavigate();

	const { page } = useParams();

	const [selected, setSelected] = useState(page);

	useEffect(() => {
		navigate(`/home/${selected}`);
	}, [selected, navigate]);

	const handlePageClick = (event) => {
		setSelected(event.selected + 1);
	};

	return (
		<Container>
			<S.SReactPaginate
				breakLabel='...'
				onPageChange={handlePageClick}
				pageRangeDisplayed={2}
				pageCount={Math.ceil(tweetsCount / 10)}
				renderOnZeroPageCount={null}
				nextLabel={'>'}
				previousLabel={'<'}
				initialPage={selected - 1}
			/>
		</Container>
	);
};

export default PaginatedItems;
