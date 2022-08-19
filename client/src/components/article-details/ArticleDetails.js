import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as articleServices from '../../services/articleServices';
import { parseDate } from "../../helpers/appHelpers";

import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { CommentsCreate } from "./comments-create/CommentsCreate";
import { CommentsList } from "./comments-list/CommentsList";
import { AuthContext } from "../../contexts/AuthContext";
import "./ArticleDetails.scss"

export const ArticleDetails = () => {
    const [article, setArticle] = useState({});
    const [recentArticles, setRecentArticles] = useState([]);
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        articleServices.getAll({ limit: 5, except: id })
            .then(res => setRecentArticles(res.articles))
            .catch(() => setRecentArticles([]));
    }, [id]);

    useEffect(() => {
        articleServices.getById(id)
            .then(res => setArticle(res))
            .catch(() => navigate('/404'));
    }, [id, navigate]);

    return (
        <>
            <Breadcrumb
                title={article.title}
                secondaryTitle={article.summary}
            />

            <div className="mt-150 mb-150">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-article-section">
                                <div className="single-article-text">
                                    <div
                                        className="single-artcile-bg"
                                        style={{ backgroundImage: `url(${article.imageUrl})` }}
                                    />
                                    <p className="blog-meta">
                                        <span className="author">
                                            <i className="fas fa-user" /> {article.owner?.email}
                                        </span>
                                        <span className="date">
                                            <i className="fas fa-calendar" /> {parseDate(article.createdAt)}
                                        </span>
                                        <span className="date">
                                            {user._id === article.owner?._id &&
                                                <>
                                                    <Link className="boxed-btn mr-5" to={`/articles/edit/${article._id}`}>Edit</Link>
                                                    <Link className="boxed-btn" to={`/articles/delete/${article._id}`}>Delete</Link>
                                                </>
                                            }
                                        </span>
                                    </p>
                                    <h2>{article.title}</h2>
                                    <p>
                                        {article.description}
                                    </p>

                                </div>
                                <CommentsList />
                                {user.accessToken
                                    ? <CommentsCreate />
                                    : <p>
                                        If you want to leave a comment you need to <Link to="/login">log in</Link> your account
                                        or if you dont have an account you can go <Link to="/register">register</Link> one.
                                    </p>
                                }

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-section">
                                <div className="recent-posts">
                                    <h4>Recent Articles</h4>
                                    <ul>
                                        {recentArticles.map(article => (
                                            <li key={article._id}>
                                                <a href={`/articles/${article._id}`}>
                                                    {article.title}
                                                </a>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                                <div className="tag-section">
                                    <h4>Category</h4>
                                    <ul>
                                        <li>
                                            <a href="single-news.html">Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}