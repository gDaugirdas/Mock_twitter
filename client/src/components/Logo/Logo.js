import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Logo.styles';

const Logo = ({ logoUrl, logoText, logoLink }) => {
	return (
		<S.SLogoLink to={logoLink || '/'}>
			<S.SLogo src={logoUrl || 'No logo image'} alt={logoText || 'No logo text'} />
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
	logoUrl: '',
	logoText: null,
	logoLink: null,
};

export default Logo;
