import React from 'react';
import * as S from './Loader.styles';

const Loader = ({ className }) => {
	return (
		<S.SLoaderWrapper>
			<S.SLoader className={className}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</S.SLoader>
		</S.SLoaderWrapper>
	);
};

export default Loader;
