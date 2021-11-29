import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Dropzone.styled';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ onDrop, dropText, text, acceptedFileTypes }) => {
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: false,
	});

	return (
		<S.SDropzone {...getRootProps()} isDragActive={isDragActive}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<S.SParagraph>{dropText || 'Drop file here...'}</S.SParagraph>
			) : (
				<>
					<S.SParagraph>{text || 'Upload file'}</S.SParagraph>
					{acceptedFileTypes && (
						<S.SParagraph>
							Accepted file types:
							{acceptedFileTypes.map((type) => (
								<S.SSpan key={type}>{type}</S.SSpan>
							))}
						</S.SParagraph>
					)}
				</>
			)}
		</S.SDropzone>
	);
};

Dropzone.propTypes = {
	onDrop: PropTypes.func.isRequired,
};

export default Dropzone;
