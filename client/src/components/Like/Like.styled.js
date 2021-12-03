import styled from 'styled-components';
import { Loader } from '../';

export const SLikeWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const SSpan = styled.span`
	font-size: 1.6rem;
`;

export const SLikeChekbox = styled.input.attrs({ type: 'checkbox' })`
	visibility: none;
	opacity: 0;
	pointer-events: none;
`;

export const SLikeLabel = styled.label`
	font-size: 2.4rem;
	cursor: pointer;
	color: ${(props) => (props.checked ? props.theme.colors.accent : props.theme.colors.font)};
`;

export const SLoader = styled(Loader)`
	width: 3.7rem;
	height: 3.7rem;
	div {
		width: 2.6em;
		height: 2.6rem;
	}
`;
