import styled from 'styled-components';
import { Form } from '..';

export const SForm = styled(Form)`
	padding: 1rem;
	border: 0.1rem solid ${(props) => props.theme.colors.secondary};
	border-radius: 0.2rem;
	margin-bottom: 1rem;
`;

export const SButtonWrapper = styled.div`
	text-align: center;
	margin-bottom: 1.5rem;
`;
