import Head from 'next/head';
import styled from 'styled-components';
import ArticleList from '../components/ArticleList';
import StyledLink from '../components/StyledLink';

const H1 = styled.h1`
	font-size: 60px;
	font-weight: 300;
	color: #fcc600;
`;
export default function Home({ articles }) {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<H1>Welcome to Nextjs</H1>
			<StyledLink href="/about" forwardedAs="/about">
				About Page
			</StyledLink>
			<ArticleList articles={articles} />
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=6',
	);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};
