import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
	const authContext = useContext(AuthContext);

	return authContext.token ? children : <Navigate replace to='/login' />;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

PrivateRoute.defaultProps = {
	children: null,
};

export default PrivateRoute;
