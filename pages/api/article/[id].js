import { articles } from './index';

export default ({ query: { id } }, res) => {
	const filtered = articles.filter(article => article.id.toString() === id);
	// User with id exists
	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({ message: `User with id: ${id} not found.` });
	}
};
