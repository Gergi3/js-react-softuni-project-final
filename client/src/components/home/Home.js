import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as articleServices from '../../services/articleServices';

import { ArticlesList } from '../shared/articles-list/ArticlesList';
import './Home.scss'

export const Home = () => {
    const [articles, setArticles] = useState([]);
    const [articlesCount, setArticlesCount] = useState(1);
    const [limit, setLimit] = useState(3);
    
    useEffect(() => {
        articleServices.getAll({limit})
            .then(res => {
                setArticles(res.articles);
                setArticlesCount(res.count);
            })
    }, [limit]);


    const onMoreClickHandler = () => {
        setLimit(old => Number(old) + 3);
    }
    
    return (
        <>
            <div className="hero-area hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-2 text-center">
                            <div className="hero-text">
                                <div className="hero-text-tablecell">
                                    <p className="subtitle">Always friendly &amp; Always in for the headshot</p>
                                    <h1>The Best Games Community</h1>
                                    <div className="hero-btns">
                                        <Link to="/articles" className="boxed-btn">
                                            Read Articles
                                        </Link>
                                        <Link to="/contact" className="bordered-btn">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="col-lg-8 offset-lg-2 text-center pt-100">
                    <div className="section-title">
                        <h3><span className="orange-text">Newest</span> Articles</h3>
                        <p>Pick from the newest, most popular game articles.</p>
                    </div>
                </div>

                <ArticlesList articles={articles} />

                {articlesCount === articles.length
                    ? <h4 className="pb-100" >
                        Looks like you've gone through everything. You can click on an article to read it or&nbsp;
                        <Link to="/articles/create">create</Link> your own article.
                    </h4>
                    : <div className="row pb-100">
                        <div className="col-lg-12 text-center">
                            <button className="boxed-btn" onClick={onMoreClickHandler}>More News</button>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};
