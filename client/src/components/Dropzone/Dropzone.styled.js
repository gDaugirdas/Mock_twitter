import styled from 'styled-components';
import { media } from '../../styles';

export const SDropzone = styled.div`
	margin: 1rem auto;
	max-width: 40rem;
	border: 0.2rem solid red;
	cursor: pointer;
	text-align: center;
	${media.sm_up`
        margin: 0;
    `}
	border: 0.2rem dashed ${(props) => (props.isDragActive ? props.theme.colors.accent : props.theme.colors.secondary)};
`;

export const SParagraph = styled.p`
	margin: 1rem;
	font-size: 1.8rem;
`;

export const SSpan = styled.span`
	margin-left: 0.5rem;
	color: ${(props) => props.theme.colors.accent};
	display: inline-block;
`;
