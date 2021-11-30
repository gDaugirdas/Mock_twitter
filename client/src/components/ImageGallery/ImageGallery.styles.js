import styled from 'styled-components';
import { media } from '../../styles';

export const SImageList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	padding: 0;
`;

export const SImageListItem = styled.li`
	width: 48%;
	margin: 1%;
	border: 0.2rem solid ${(props) => props.theme.colors.font};
	padding: 0.5rem;
	border-radius: 0.2rem;
	display: flex;
	flex-direction: column;
	${media.sm_up`
        width: 23.5%;
        margin: 0.5%;
    `}
`;

export const SImageWrapper = styled.div`
	height: 18rem;
	margin-bottom: 0.5rem;
`;

export const SImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 0.2rem;
`;

export const SHeading = styled.h2`
	text-align: center;
	font-size: 2.2rem;
`;
