import { Link } from 'react-router-dom';

import { parseDate } from "../../../../helpers/appHelpers";

export const ArticleItem = ({
    article
}) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-latest-news">
                <Link to={`/articles/${article._id}`}>
                    <div className="latest-news-bg" style={{ backgroundImage: `url(${article.imageUrl})` }} />
                </Link>
                <div className="news-text-box">
                    <h3>
                        <Link to={`/articles/${article._id}`}>{article.title}</Link>
                    </h3>
                    <p className="blog-meta">
                        <span className="author">
                            <i className="fas fa-user" />{article.owner.email}
                        </span>
                        <span className="date">
                            <i className="fas fa-calendar" />{parseDate(article.createdAt)}
                        </span>
                    </p>
                    <p className="excerpt">{article.summary}</p>
                    <Link to={`/articles/${article._id}`} className="read-more-btn">
                        Read more <i className="fas fa-angle-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
