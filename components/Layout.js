import React from 'react';
import Header from './Header';
import Nav from './Nav';
import GlobalStyles from './styles/GlobalStyles';

export default function Layout({ children }) {
	return (
		<>
			<GlobalStyles />
			<Nav />
			<div className="container">
				<Header />
				<main className="main">{children}</main>
			</div>
		</>
	);
}
