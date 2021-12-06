import styled from 'styled-components';
import { media } from '../../styles';

export const SHeader = styled.header`
	padding: 0.5rem 0;
	box-shadow: 0 0 0.3rem ${(props) => props.theme.shadow};
`;

export const SHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.5rem;

	${media.sm_up`
    padding: 0 .8rem;
`}

	${media.sm_up`
    padding: 0 1.2rem;
`}
`;
