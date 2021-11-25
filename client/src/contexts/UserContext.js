import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const token = localStorage.getItem('token');

	const [user] = useState(token ? jwt_decode(token) : null);

	return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserProvider;
