import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SSuggestion = styled.p`
	font-size: 1.2rem;
`;

export const SSuggestionLink = styled(Link)`
	color: ${(props) => props.theme.secondary};
`;
