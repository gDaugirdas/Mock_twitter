import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthProvider from './contexts/AuthContext';
import { GlobalStyles, theme } from './styles';
import { Header, Footer, PrivateRoute, Loader } from './components';

const LazyHome = lazy(() => import('./views/Home.js'));
const LazyLogin = lazy(() => import('./views/Login.js'));
const LazySignup = lazy(() => import('./views/Signup.js'));
const LazyAdd = lazy(() => import('./views/Add'));
const LazyProfile = lazy(() => import('./views/Profile'));
const LazyTweet = lazy(() => import('./views/Tweet'));

const PageRouter = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AuthProvider>
				<Router defaultParams={{ page: 1 }}>
					<Header />
					<Suspense fallback={<Loader />}>
						<Routes>
							<Route
								exact
								path='/home/:page'
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
							<Route
								exact
								path='/user/:id'
								element={
									<PrivateRoute>
										<LazyProfile />
									</PrivateRoute>
								}
							/>
							<Route
								exact
								path='/tweets/:id'
								element={
									<PrivateRoute>
										<LazyTweet />
									</PrivateRoute>
								}
							/>
							<Route exact path='/login' element={<LazyLogin />} />
							<Route exact path='/signup' element={<LazySignup />} />
							<Route path='*' element={<Navigate replace to='/home/1' />}></Route>
						</Routes>
					</Suspense>
					<Footer />
				</Router>
			</AuthProvider>
		</ThemeProvider>
	);
};

export default PageRouter;
