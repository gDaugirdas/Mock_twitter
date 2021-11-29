import React, { useState, useContext } from 'react';
import * as S from './Header.styles';
import { Logo, Hamburger, Nav } from '../';
import { AuthContext } from '../../contexts/AuthContext';
import LogoImage from '../../static/images/logo.png';
import { UserContext } from '../../contexts/UserContext';

const Header = () => {
	const authContext = useContext(AuthContext);
	const userContext = useContext(UserContext);

	const user = userContext.user;

	const noUserPages = [
		{
			title: 'Login',
			href: '/login',
		},
		{
			title: 'Sign Up',
			href: '/signup',
		},
	];

	const userPages = [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'Profile',
			href: `/user/${user && user.id}`,
		},
		{
			title: 'Logout',
			href: '/login',
		},
	];

	const [isOpen, setIsOpen] = useState(false);
	return (
		<S.SHeader>
			<S.SHeaderContainer>
				<Logo logoUrl={LogoImage} logoText='itter' />
				<Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
				<Nav pages={authContext.token ? userPages : noUserPages} isOpen={isOpen} setIsOpen={setIsOpen} />
			</S.SHeaderContainer>
		</S.SHeader>
	);
};

export default Header;
