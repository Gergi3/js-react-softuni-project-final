import { useContext, useEffect, useState } from 'react';

import * as articleServices from '../../services/articleServices';

import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { Pagination } from '../pagination/Pagination';
import { ArticlesList } from '../shared/articles-list/ArticlesList';
import { AuthContext } from '../../contexts/AuthContext';
import './ArticlesPage.scss';

export const ArticlesPage = ({
    isUserArticles
}) => {
    const [articles, setArticles] = useState([]);
    const [articlesCount, setArticlesCount] = useState(1);
    const [page, setPage] = useState(1)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        let query = {limit: 3, page}
        if (isUserArticles && user) {
            query.criteria = 'owner';
            query.search = user._id;
        }
        console.log(query);
        articleServices.getAll(query)
            .then(res => {
                setArticles(res.articles);
                setArticlesCount(res.count);
            })
    }, [isUserArticles, page, user]);

    const changePageHandler = (newPage) => {
        setPage(newPage);
    }

    return (
        <>
            <Breadcrumb
                title="Articles"
                secondaryTitle="The best of the best"
            />
            
            <div className="container">
                <div className="col-lg-8 col-md-8 mx-auto pt-50">
                    <div className="footer-box subscribe">
                        <form>
                            <input type="email" placeholder="Search" />
                            <button type="submit">
                                <i className="fas fa-paper-plane" />
                            </button>
                        </form>
                    </div>
                </div>
                
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
