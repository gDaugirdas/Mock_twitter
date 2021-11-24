import styled from 'styled-components';
import { media } from '../../styles';

export const SContainer = styled.div`
	padding: 0 1rem;
	${media.sm_up`
        padding: 0 1.5rem;
    `}
`;
