import styled from 'styled-components';

export const SHamburger = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-end;
	width: 3rem;
	height: 3rem;
	background: transparent;
	border: 0;
	cursor: pointer;
	padding: 0;
	z-index: 10;

	&:focus {
		outline: none;
	}
`;

export const SHambugerLine = styled.div`
	width: 100%;
	height: 0.3rem;
	background-color: ${(props) => props.theme.colors.font};
	transition: all 0.3s linear;
	transform-origin: 0.2rem;
	border-radius: 0.1rem;
	&:last-child {
		width: 2rem;
	}

	${(props) =>
		props.isOpen &&
		`
			background-color: ${props.theme.colors.primary};
            &:first-child {
				transform: rotate(45deg);
				width: 3.2rem;
			}
			&:nth-child(2) {
				opacity: 0;
				transform: translateX(20px);
			}
			&:nth-child(3) {
				transform: rotate(-45deg);
				width: 3.2rem;
			}
        `}
`;
