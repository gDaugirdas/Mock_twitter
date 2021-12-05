import styled from 'styled-components';
import { media } from '../../styles';
import { UserImage } from '../';

export const SUserHero = styled.div`
	text-align: center;
	${media.sm_up`
        display: flex;
    `}
`;

export const SUserImage = styled(UserImage)`
	width: 14rem;
	height: 14rem;
	${media.sm_up`
		width: 20rem;
		height: 20rem;
	`}
`;

export const SUserImageWrapper = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
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
