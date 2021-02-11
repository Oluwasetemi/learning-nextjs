import Head from 'next/head';
import styled from 'styled-components';

const H1 = styled.h1`
	font-size: 60px;
	font-weight: 300;
	color: #fcc600;
`;
export default function About() {
	return (
		<div>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<H1>About Nextjs</H1>
		</div>
	);
}
