import React from 'react';
import PropTypes from 'prop-types';
import * as S from './UserImage.styles';
import UserNotFoundImg from '../../static/images/user_not_found.png';

const UserImage = ({ userImageUrl, userImageAlt, size }) => {
	return (
		<S.SImageWrapper size={size}>
			<S.SImage src={userImageUrl || UserNotFoundImg} alt={userImageAlt || 'User image not found'}></S.SImage>
		</S.SImageWrapper>
	);
};

UserImage.propTypes = {
	userImageUrl: PropTypes.string,
	userImageAlt: PropTypes.string,
};

UserImage.defaultProps = {
	userImageUrl: null,
	userImageAlt: null,
};

export default UserImage;
