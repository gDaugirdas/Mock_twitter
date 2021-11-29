import styled from 'styled-components';
import { media } from '../../styles';

export const SUserHero = styled.div`
	text-align: center;
	${media.sm_up`
        display: flex;
    `}
`;

export const SUserImageWrapper = styled.div`
	flex: 2;
	align-self: center;
`;

export const STextWrapper = styled.div`
	text-align: center;
	margin-top: 1rem;
	${media.sm_up`
        flex: 3;
        text-align: left;
    `}
`;

export const SUserHeading = styled.h2`
	font-size: 2.4rem;
	margin: 0;
	&:first-child {
		margin-bottom: 1rem;
	}
	${media.sm_up`
        font-size: 3.2rem;
    `}
`;

export const SUserParagraph = styled.p`
	font-size: 1.8rem;
	word-break: break-word;
`;

export const SUserSpan = styled.span`
	font-weight: 600;
`;
