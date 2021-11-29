import styled from 'styled-components';

export const SNotification = styled.div`
	background-color: ${(props) => (props.status < 400 ? props.theme.colors.success : props.theme.colors.error)};
	margin: 1rem auto;
	max-width: 32rem;
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	border-radius: 0.2rem;
`;

export const SSvg = styled.svg`
	margin-right: 1rem;
	width: 2.4rem;
	height: 2.4rem;
`;

export const SNotificationText = styled.p`
	font-size: 1.4rem;
	flex: 1;
	text-align: center;
`;
