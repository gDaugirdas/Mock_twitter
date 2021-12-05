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
				<S.SParagraph>{dropText}</S.SParagraph>
			) : (
				<>
					<S.SParagraph>{text}</S.SParagraph>
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
	dropText: PropTypes.string,
	text: PropTypes.string,
	acceptedFileTypes: PropTypes.array,
};

Dropzone.defaultProps = {
	dropText: 'Drop file here...',
	text: 'Upload file',
	acceptedFileTypes: [],
};

export default Dropzone;
