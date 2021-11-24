import styled from 'styled-components';
import { media } from '../../styles';

export const SCardList = styled.ul`
	padding: 0;
	display: flex;
	flex-wrap: wrap;
`;

export const SCard = styled.li`
	padding: 1.5rem;
	border: 0.1rem solid ${(props) => props.theme.colors.tertiary};
	min-height: 12rem;
	border-radius: 0.5rem;
	box-shadow: 0 0 0.5rem ${(props) => props.theme.colors.shadow};
	width: 49%;
	margin: 0.5%;
	${media.sm_up`
        width: 24%;
        margin: .5%;
    `}
`;

export const STitle = styled.h3`
	margin-top: 0;
`;

export const SDescription = styled.p`
	margin: 0;
`;
