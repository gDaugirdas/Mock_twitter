import styled from 'styled-components';

export const SMain = styled.main`
	max-width: 112rem;
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	box-shadow: ${(props) => props.theme.shadow} 0 0.5rem 2rem;
`;
