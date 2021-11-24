import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthProvider from './contexts/AuthContext';
import { GlobalStyles, theme } from './styles';
import { Header, PrivateRoute, Loader } from './components';

const LazyHome = lazy(() => import('./views/Home.js'));
const LazyLogin = lazy(() => import('./views/Login.js'));
const LazySignup = lazy(() => import('./views/Signup.js'));
const LazyAdd = lazy(() => import('./views/Add'));
const LazyProfile = lazy(() => import('./views/Profile'));

const PageRouter = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AuthProvider>
				<Router>
					<Header />
					<Suspense fallback={<Loader />}>
						<Routes>
							<Route
								exact
								path='/'
								element={
									<PrivateRoute>
										<LazyHome />
									</PrivateRoute>
								}
							/>
							<Route
								exact
								path='/add'
								element={
									<PrivateRoute>
										<LazyAdd />
									</PrivateRoute>
								}
							/>
							<Route exact path='/login' element={<LazyLogin />} />
							<Route exact path='/signup' element={<LazySignup />} />
							<Route exact path='/profile' element={<LazyProfile />} />
							<Route path='*' element={<LazyHome />} />
						</Routes>
					</Suspense>
				</Router>
			</AuthProvider>
		</ThemeProvider>
	);
};

export default PageRouter;
