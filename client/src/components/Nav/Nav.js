import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './Nav.styles';
import { AuthContext } from '../../contexts/AuthContext';

const Nav = ({ pages, isOpen, setIsOpen }) => {
	const authContext = useContext(AuthContext);
	return (
		<S.SNav isOpen={isOpen}>
			{pages?.map((page) => (
				<S.SNavLink
					key={page.title}
					to={page.href}
					onClick={() => {
						setIsOpen(false);
						page.title === 'Logout' && authContext.setToken();
						localStorage.removeItem('token');
					}}
				>
					{page.title}
				</S.SNavLink>
			))}
		</S.SNav>
	);
};

Nav.propTypes = {
	pages: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			href: PropTypes.string.isRequired,
		})
	),
	isOpen: PropTypes.bool.isRequired,
};

Nav.defaultProps = {
	pages: [],
	isOpen: false,
	setIsOpen: () => {},
};

export default Nav;
