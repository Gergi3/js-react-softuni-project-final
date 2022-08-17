import { useEffect } from 'react';
import { Pagination } from '../pagination/Pagination';
import { ArticleItem } from './article-item/ArticleItem';
import './ArticlesList.scss';

export const ArticlesList = ({
    pagination
}) => {
    return (
        <div className="latest-news mt-100 mb-150">
            <div className="row">
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
            </div>

        {pagination 
            ? <Pagination />
            : <div className="row">
                <div className="col-lg-12 text-center">
                    <button alt="" className="boxed-btn">More News</button>
                </div>
            </div>
        }

        </div>
    );
};
