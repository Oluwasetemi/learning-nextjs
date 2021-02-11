import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const index = ({ article }) => {
	const { query } = useRouter();
	const { id } = query;

	return (
		<div>
			<h3>{article.title}</h3>
			<p>{article.body}</p>
			<br />
			<Link href="/">go back</Link>
		</div>
	);
};

export const getStaticProps = async context => {
	console.log(context);
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
	);

	const article = await res.json();

	return {
		props: {
			article,
		},
	};
};
export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

	const articles = await res.json();

	const paths = articles
		.map(each => each.id)
		.map(id => ({ params: { id: id.toString() } }));

	// console.log(paths);

	return {
		paths,
		fallback: false,
	};
};

export default index;
