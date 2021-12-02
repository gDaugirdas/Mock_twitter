import React from 'react';
import * as S from './Footer.styles';

const Footer = () => {
	return (
		<S.SFooter>
			<S.SParagraph>
				Copyright ©
				<S.SLink href='https://github.com/gDaugirdas' target='_blank'>
					gDaugirdas
				</S.SLink>
				{new Date().getFullYear()}. All rights reserved.
			</S.SParagraph>
		</S.SFooter>
	);
};

export default Footer;
