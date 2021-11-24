import styled from 'styled-components';
import { media } from '../../styles';

export const SSection = styled.section`
	padding: 1rem 0;

	${media.sm_up`
        padding: 2rem 0;
    `}
`;
