import React from 'react';
import PropTypes from 'prop-types';
import * as S from './UserMain.styles';
import { Container, Dropzone } from '..';

const UserMain = ({ user, onDrop, isCurrentUser }) => {
	return (
		<Container>
			{user && (
				<>
					<S.SUserHero>
						<S.SUserImageWrapper>
							<S.SUserImage
								userImageUrl={user[0].profile_picture}
								userImageAlt={user[0].profile_picture && 'User profile picture'}
							/>
							{isCurrentUser && (
								<Dropzone
									onDrop={onDrop}
									text='Upload profile image'
									acceptedFileTypes={['.jpeg', '.jpg', '.png']}
								/>
							)}
						</S.SUserImageWrapper>
						<S.STextWrapper>
							<S.SUserHeading>{user[0].first_name}</S.SUserHeading>
							<S.SUserHeading>{user[0].last_name}</S.SUserHeading>
							<S.SUserParagraph>
								<S.SUserSpan>Email: </S.SUserSpan>
								{user[0].email || 'Email not found'}
							</S.SUserParagraph>
							<S.SUserParagraph>
								<S.SUserSpan> Created at: </S.SUserSpan>
								{user[0].created_at.split('T')[0]}
							</S.SUserParagraph>
						</S.STextWrapper>
					</S.SUserHero>
				</>
			)}
		</Container>
	);
};

UserMain.propTypes = {
	user: PropTypes.arrayOf(PropTypes.object).isRequired,
	onDrop: PropTypes.func.isRequired,
	isCurrentUser: PropTypes.bool.isRequired,
};

export default UserMain;
