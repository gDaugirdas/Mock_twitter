import styled from 'styled-components';

export const SImageWrapper = styled.div`
	border-radius: 50%;
	overflow: hidden;
	margin: 0 auto;
	box-shadow: 0 0.2rem 0.5rem ${(props) => props.theme.colors.shadow};
`;

export const SImage = styled.img`
	width: 100%;
	height: 100%;
	vertical-align: bottom;
	object-fit: cover;
`;
