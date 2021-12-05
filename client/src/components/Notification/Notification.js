import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Notification.styles';
import { Container } from '../';

const Notification = ({ notificationText, status }) => {
	return (
		<Container>
			<S.SNotification status={status}>
				<div>
					<S.SSvg xmlns='http://www.w3.org/2000/svg'>
						<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25a1.25 1.25 0 010-2.5zM14 18h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735V18z'></path>
					</S.SSvg>
				</div>
				<S.SNotificationText>{notificationText}</S.SNotificationText>
			</S.SNotification>
		</Container>
	);
};

Notification.propTypes = {
	notificationText: PropTypes.string.isRequired,
	status: PropTypes.number,
};

Notification.defaultProps = {
	status: 418,
};

export default Notification;
