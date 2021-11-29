import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ImageGallery.styles';
import { Container, Dropzone, Button } from '..';

const ImageGallery = ({ images, isCurrentUser, onDrop }) => {
	return (
		<Container>
			{isCurrentUser && (
				<Dropzone onDrop={onDrop} text='Upload gallery image' acceptedFileTypes={['.jpeg', '.jpg', '.png']} />
			)}
			{images && images.length === 0 && <h2>No images in user gallery</h2>}
			{images && images.length > 0 && (
				<>
					<h2>User Image gallery</h2>
					<S.SImageList>
						{images.map((image) => (
							<S.SImageListItem key={image.id}>
								<S.SImage src={image.image_url || 'Image link not provided'} alt='Gallery image' />
								{isCurrentUser && <Button onClick={() => console.log('delete')}>Delete</Button>}
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
