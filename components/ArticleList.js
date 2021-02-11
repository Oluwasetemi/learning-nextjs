import React from 'react';
import { ArticleItem } from './ArticleItem';

const ArticleList = ({ articles }) => (
	<div className="grid">
		{articles.map(article => (
			<ArticleItem article={article} key={article.id} />
		))}
	</div>
);

export default ArticleList;
