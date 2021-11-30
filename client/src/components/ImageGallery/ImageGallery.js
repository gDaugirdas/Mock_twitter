import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as S from './ImageGallery.styles';
import { Container, Dropzone, Button } from '..';

const ImageGallery = ({ images, isCurrentUser, onDrop, handleDelete }) => {
	return (
		<Container>
			{isCurrentUser && (
				<Dropzone onDrop={onDrop} text='Upload gallery image' acceptedFileTypes={['.jpeg', '.jpg', '.png']} />
			)}
			{images && images.length === 0 && <S.SHeading>No images in user gallery</S.SHeading>}
			{images && images.length > 0 && (
				<>
					<S.SHeading>User Image gallery</S.SHeading>
					<S.SImageList>
						{console.log(images)}
						{images.map((image) => (
							<S.SImageListItem key={image.id}>
								<S.SImageWrapper>
									<S.SImage src={image.image_url || 'Image link not provided'} alt='Gallery image' />
								</S.SImageWrapper>
								{isCurrentUser && <Button handleClick={() => handleDelete(image.id)}>Delete</Button>}
							</S.SImageListItem>
						))}
					</S.SImageList>
				</>
			)}
		</Container>
	);
};

ImageGallery.propTypes = {
	isCurrentUser: PropTypes.bool.isRequired,
};

export default ImageGallery;
