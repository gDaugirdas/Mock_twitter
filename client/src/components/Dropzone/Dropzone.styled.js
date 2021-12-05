import styled from 'styled-components';
import { media } from '../../styles';

export const SDropzone = styled.div`
	margin: 0 auto;
	max-width: 40rem;
	cursor: pointer;
	text-align: center;
	border-radius: 0.2rem;
	border: 0.2rem solid ${(props) => (props.isDragActive ? props.theme.colors.accent : props.theme.colors.secondary)};
	${media.sm_up`
		margin: 0;	
	`}
`;

export const SParagraph = styled.p`
	margin: 1.4rem;
	font-size: 1.8rem;
`;

export const SSpan = styled.span`
	margin-left: 0.5rem;
	color: ${(props) => props.theme.colors.accent};
	display: inline-block;
`;
