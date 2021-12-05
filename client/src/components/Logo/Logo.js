import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Logo.styles';

const Logo = ({ logoUrl, logoText, logoLink }) => {
	return (
		<S.SLogoLink to={logoLink}>
			<S.SLogo src={logoUrl} alt={logoText} />
			{logoText && <S.SLogoText>{logoText}</S.SLogoText>}
		</S.SLogoLink>
	);
};

Logo.propTypes = {
	logoUrl: PropTypes.string.isRequired,
	logoText: PropTypes.string,
	logoLink: PropTypes.string,
};

Logo.defaultProps = {
	logoUrl: '/',
	logoText: 'No logo image',
	logoLink: 'No logo text',
};

export default Logo;
