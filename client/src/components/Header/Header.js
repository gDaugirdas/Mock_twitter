import React, { useState, useContext, useEffect } from 'react';
import * as S from './Header.styles';
import { Logo, Hamburger, Nav } from '../';
import { AuthContext } from '../../contexts/AuthContext';
import LogoImage from '../../static/images/logo.png';
import jwt_decode from 'jwt-decode';

const Header = () => {
	const authContext = useContext(AuthContext);

	const [user, setUser] = useState();

	useEffect(() => {
		if (authContext.token) {
			setUser(jwt_decode(authContext.token));
		}
	}, [authContext.token]);

	console.log(localStorage.getItem('token'));

	const [isOpen, setIsOpen] = useState(false);

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
