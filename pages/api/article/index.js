export const articles = [
	{
		id: '1',
		title: 'first blog post',
		body: 'this is the body for first blog post',
	},
	{
		id: '2',
		title: 'second blog post',
		body: 'this is the body for second blog post',
	},
	{
		id: '3',
		title: 'third blog post',
		body: 'this is the body for third blog post',
	},
];

export default (req, res) => {
	res.status(200).json(articles);
};
