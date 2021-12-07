import React from 'react';
import PropTypes from 'prop-types';
import * as S from './UserHero.styles';
import { Container, Dropzone, ThemeToggler } from '..';

const UserHero = ({ user, onDrop, isCurrentUser, theme, toggleTheme }) => {
	return (
		<Container>
			{user && (
				<>
					<S.SUserHero>
						<S.SUserImageWrapper>
							<S.SUserImage
								userImageUrl={user.profile_picture}
								userImageAlt={user.profile_picture && 'User profile picture'}
							/>
						</S.SUserImageWrapper>
						<S.STextWrapper>
							<S.SUserHeading>{user.first_name}</S.SUserHeading>
							<S.SUserHeading>{user.last_name}</S.SUserHeading>
							<S.SUserParagraph>
								<S.SUserSpan>Email: </S.SUserSpan>
								{user.email || 'Email not found'}
							</S.SUserParagraph>
							<S.SUserParagraph>
								<S.SUserSpan> Created at: </S.SUserSpan>
								{user.created_at.split('T')[0] || 'Date not found'}
							</S.SUserParagraph>
							{isCurrentUser && (
								<>
									<Dropzone
										onDrop={onDrop}
										text='Upload profile image'
										acceptedFileTypes={['.jpeg', '.jpg', '.png']}
									/>
									<ThemeToggler theme={theme} toggleTheme={toggleTheme} />
								</>
							)}
						</S.STextWrapper>
					</S.SUserHero>
				</>
			)}
		</Container>
	);
};

UserHero.propTypes = {
	user: PropTypes.object.isRequired,
	onDrop: PropTypes.func.isRequired,
	isCurrentUser: PropTypes.bool.isRequired,
};

export default UserHero;
