import Link from 'next/link';
import React from 'react';
import NavStyles from './styles/NavStyles';

export default function Nav() {
	return (
		<NavStyles>
			<nav className="nav">
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
				</ul>
			</nav>
		</NavStyles>
	);
}
