import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const SLoaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SLoader = styled.div`
	display: inline-block;
	position: relative;
	width: 8rem;
	height: 8rem;

	div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 6.4rem;
		height: 6.4rem;
		margin: 0.8rem;
		border: 0.8rem solid ${(props) => props.theme.colors.secondary};
		border-radius: 50%;
		animation: ${rotateAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: ${({ theme }) => theme.colors.secondary} transparent transparent transparent;

		&:nth-child(1) {
			animation-delay: -0.45s;
		}
		&:nth-child(2) {
			animation-delay: -0.3s;
		}
		&:nth-child(3) {
			animation-delay: -0.15s;
		}
	}
`;
