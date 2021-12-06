import styled from 'styled-components';

export const SFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 6rem;
	box-shadow: 0 -0.1rem 1rem 0 ${(props) => props.theme.shadow};
	margin-top: auto;
`;

export const SParagraph = styled.p`
	font-size: 1.4rem;
	margin: 0;
`;

export const SLink = styled.a`
	display: inline-block;
	margin: 0 0.5rem;
`;
