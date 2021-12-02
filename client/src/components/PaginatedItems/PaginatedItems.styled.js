import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const SReactPaginate = styled(ReactPaginate)`
	margin-bottom: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	list-style-type: none;
	padding: 0 5rem;

	li a {
		border-radius: 7px;
		padding: 0.1rem 1rem;
		border: gray 1px solid;
		cursor: pointer;
		font-size: 2rem;
	}
	li.previous a,
	li.next a,
	li.break a {
		border-color: transparent;
	}
	li.selected a {
		background-color: #0366d6;
		border-color: transparent;
		color: white;
		min-width: 32px;
	}
`;
