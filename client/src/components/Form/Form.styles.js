import styled from 'styled-components';
import { media } from '../../styles';

export const SFormWrapper = styled.div`
	${media.sm_up`
        max-width: 40rem;
        margin: 0 auto;
    `}
`;

export const SHeading = styled.h2`
	font-size: 2rem;
	text-align: center;
`;

export const SFormGroup = styled.div`
	margin-bottom: 1.5rem;
	&:last-child {
		margin-bottom: 0;
		margin-top: 1.8rem;
	}
`;

export const SFormLabel = styled.label`
	font-size: 1.6rem;
	margin-bottom: 0.8rem;
	display: block;
`;

export const SFormInput = styled.input`
	display: block;
	width: 100%;
	padding: 1rem;
	font-size: 1.6rem;
`;
