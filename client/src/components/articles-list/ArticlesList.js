import { useContext, useEffect } from 'react';
import { ArticleContext } from '../../contexts/ArticleContext';
import { Pagination } from '../pagination/Pagination';
import { ArticleItem } from './article-item/ArticleItem';
import './ArticlesList.scss';

export const ArticlesList = ({
    pagination,
}) => {
    const { articles } = useContext(ArticleContext);

    return (
        <div className="latest-news mt-100 mb-150">
            <div className="row">
                {articles.map(article => (
                    <ArticleItem key={article._id} article={article}/>
                ))}
            </div>

        {pagination 
            ? <Pagination />
            : <div className="row">
                <div className="col-lg-12 text-center">
                    <a className="boxed-btn">More News</a>
                </div>
            </div>
        }

        </div>
    );
};
