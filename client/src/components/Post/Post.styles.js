import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UserImage } from '../';

export const SWrapper = styled.div`
	display: flex;
	border: 0.1rem solid ${(props) => props.theme.colors.secondary};
	box-shadow: 0 0.2rem 0.5rem ${(props) => props.theme.colors.shadow};
	border-radius: 1rem;
	padding: 1rem;
	margin-bottom: 2rem;
`;

export const SUserImage = styled(UserImage)`
	width: 6rem;
	height: 6rem;
`;

export const SUserImageWrapper = styled.div`
	flex: 1;
	padding-right: 0.4rem;
`;

export const STextWrapper = styled.div`
	flex: 5;
`;

export const SDateParagraph = styled.p`
	font-size: 1.6rem;
	margin: 0;
`;

export const SParagraph = styled.p`
	font-size: 1.6rem;
`;

export const SFooter = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SUserLink = styled(Link)`
	font-size: 2rem;
	color: ${(props) => props.theme.colors.font};
	font-weight: 600;
	&:hover {
		text-decoration: underline;
	}
`;

export const STweetLink = styled(Link)`
	font-size: 3rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.font};
`;
