import styled from 'styled-components';
import { UserImage } from '../';
import { Link } from 'react-router-dom';

export const SWrapper = styled.div`
	display: flex;
	border: 0.2rem solid ${(props) => props.theme.colors.secondary};
	box-shadow: 0 0.2rem 0.5rem ${(props) => props.theme.colors.shadow};
	border-radius: 0.2rem;
	padding: 1rem;
	margin-bottom: 0.6rem;
`;

export const SUserImage = styled(UserImage)`
	width: 6rem;
	height: 6rem;
`;

export const SUserImageWrapper = styled.div`
	flex: 1;
	padding-right: 0.4rem;
`;

export const STweetHero = styled.div`
	flex: 5;
`;

export const SParagraphDate = styled.p`
	font-size: 1.6rem;
	margin: 0;
`;

export const SParagraph = styled.p`
	font-size: 1.6rem;
`;

export const SNameLink = styled(Link)`
	font-size: 2rem;
	color: ${(props) => props.theme.colors.font};
	font-weight: 600;
	&:hover {
		text-decoration: underline;
	}
`;