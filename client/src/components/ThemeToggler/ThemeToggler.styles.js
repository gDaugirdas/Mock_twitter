import styled from 'styled-components';
import {media} from '../../styles';

export const SSwitchWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
  justify-content: center;
  margin-top: 1rem;
  ${media.sm_up`
    justify-content: flex-start;
  `}
`;

export const SSwitchLabel = styled.label`
	width: 4.2rem;
	height: 2.6rem;
	border-radius: 1.5rem;
	background: ${props => props.theme.secondary};
	cursor: pointer;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 1.8rem;
		height: 1.8rem;
		margin: 0.3rem;
		background: #ffffff;
		box-shadow: 0.1rem 0.3rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;

export const SSwitch = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 1.5rem;
	width: 4.2rem;
	height: 2.6rem;
	cursor: pointer;
  display:none;
	&:checked + ${SSwitchLabel} {
		background: ${props => props.theme.accent};
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 1.8rem;
			height: 1.8rem;
			margin-left: 2.1rem;
			transition: 0.2s;
		}
	}
`;

export const SSwitchText = styled.span`
	font-size: 1.8rem;
	margin-left: 1rem;
`;