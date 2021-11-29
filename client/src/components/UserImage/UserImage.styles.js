import styled from 'styled-components';
import { media } from '../../styles';

export const SImageWrapper = styled.div`
	width: ${(props) => (props.size === 'large' ? '14rem' : '2rem')};
	height: ${(props) => (props.size === 'large' ? '14rem' : '2rem')};
	border-radius: 50%;
	overflow: hidden;
	margin: 0 auto;
	border: 0.3rem solid ${(props) => props.theme.colors.tertiary};
	${media.sm_up`
		width: ${(props) => (props.size === 'large' ? '20rem' : '3rem')};
		height: ${(props) => (props.size === 'large' ? '20rem' : '3rem')};
	`}
`;

export const SImage = styled.img`
	width: 100%;
	height: 100%;
	vertical-align: bottom;
	object-fit: cover;
`;
