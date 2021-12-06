import styled from 'styled-components';
import { media } from '../../styles';

export const SButton = styled.button`
	background-color: ${(props) => props.theme.secondary};
	color: ${(props) => props.theme.primary};
	border: none;
	border-radius: 0.2rem;
	width: 100%;
	padding: 1.5rem;
	font-size: 1.6rem;
	cursor: pointer;
	${media.sm_up`
   		font-size: 1.8rem;
    	width: auto;
  `}

	&:disabled {
		background-color: ${(props) => props.theme.disabled};
	}
`;
