import styled from 'styled-components';
import { Form } from '../';

export const SForm = styled(Form)`
	border: 1px solid #ccc;
	padding: 1rem;
	border: 0.2rem solid ${(props) => props.theme.colors.secondary};
	border-radius: 0.2rem; ;
`;

export const SButtonWrapper = styled.div`
	text-align: center;
	margin-bottom: 1rem;
`;
