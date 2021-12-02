import styled from 'styled-components';

export const SAccordion = styled.div`
	max-height: 0;
	transition: max-height 0.5s ease;
	overflow: hidden;
	${(props) =>
		props.isOpen &&
		`
            max-height: 40rem;
            transition: max-height 0.5s ease;
		`}
`;
