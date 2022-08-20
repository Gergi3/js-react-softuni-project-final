import { useContext, useEffect, useState } from 'react';

import * as articleServices from '../../services/articleServices';

import { AuthContext } from '../../contexts/AuthContext';
import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { Pagination } from '../pagination/Pagination';
import { ArticlesList } from '../shared/articles-list/ArticlesList';
import { ArticlesSearch } from '../articles-search/ArticlesSearch';
import './ArticlesPage.scss';

export const ArticlesPage = ({
    isUserArticles
}) => {
    const [articles, setArticles] = useState([]);
    const [articlesCount, setArticlesCount] = useState(1);
    const [page, setPage] = useState(1)
    const [searchData, setSearchData] = useState({});
    const { user } = useContext(AuthContext)

    useEffect(() => {
        let query = { limit: 3, page, ...searchData }
        if (isUserArticles && user) {
            query.owner = user._id;
        }

        articleServices.getAll(query)
            .then(res => {
                setArticles(res.articles);
                setArticlesCount(res.count);
            })
            .catch(err => console.log(err));
    }, [isUserArticles, page, searchData, user]);

    const changePageHandler = (newPage) => setPage(newPage);
    const searchHandler = (newSearchData) => {
        setPage(1);
        setSearchData(newSearchData);
    };

    return (
        <>
            <Breadcrumb
                title="Articles"
                secondaryTitle="The best of the best"
            />

            <div className="container">
                <ArticlesSearch searchHandler={searchHandler}/>

                <ArticlesList articles={articles} />

                <Pagination
                    changePageHandler={changePageHandler}
                    articlesCount={articlesCount}
                    page={page}
                />
            </div>
        </>
    );
};
