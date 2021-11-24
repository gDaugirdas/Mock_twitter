import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SLogoLink = styled(Link)`
	display: flex;
	align-items: center;
	color: ${(props) => props.theme.colors.font};
`;

export const SLogo = styled.img`
	width: 5rem;
`;

export const SLogoText = styled.span`
	font-size: 1.8rem;
	font-weight: bold;
	margin-left: 0.5rem;
`;
