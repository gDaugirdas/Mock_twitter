import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../styles';

export const SNav = styled.nav`
	width: 18rem;
	background: ${(props) => props.theme.colors.secondary};
	height: 100%;
	top: 0;
	right: -18rem;
	position: fixed;
	z-index: 9;
	text-align: center;
	transition: right 0.4s;
	padding-top: 10rem;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	${media.sm_up`
        width: 30rem;
        right: -30rem;
        
        ${(props) =>
			props.isOpen &&
			`
            right: 0
        `}
    `}

	${(props) =>
		props.isOpen &&
		`
        right: 0
    `}
`;

export const SNavLink = styled(Link)`
	display: block;
	padding: 1.5rem 0;
	font-size: 1.8rem;
	color: ${(props) => props.theme.colors.primary};
	border-bottom: 0.2rem solid ${(props) => props.theme.colors.primary};
	&:first-child {
		border-top: 0.2rem solid ${(props) => props.theme.colors.primary};
	}
	${media.sm_up`
        font-size: 2rem;
    `}
`;
