import { ArticleItem } from './article-item/ArticleItem';
import './ArticlesList.scss';

export const ArticlesList = ({
    articles
}) => {
    return (
        <div className="latest-news mt-100 mb-50">
            <div className="row">
                {articles.length > 0
                    ? articles.map(article => (
                        <ArticleItem key={article._id} article={article} />
                    ))
                    : <h1>Loading..</h1>
                }
            </div>
        </div>
    );
};
