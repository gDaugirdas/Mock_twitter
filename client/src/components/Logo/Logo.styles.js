import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SLogoLink = styled(Link)`
	display: flex;
	align-items: flex-end;
	color: ${(props) => props.theme.font};
`;

export const SLogo = styled.img`
	width: 5rem;
`;

export const SLogoText = styled.span`
	font-size: 2.6rem;
	font-weight: bold;
	margin-left: 0.25rem;
`;
