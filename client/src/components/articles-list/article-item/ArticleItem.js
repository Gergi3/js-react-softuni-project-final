import { parseDate } from "../../../helpers/appHelpers";

export const ArticleItem = ({
    article
}) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-latest-news">
                <a href="/articles/single">
                    <div className="latest-news-bg" style={{backgroundImage: `url(${article.imageUrl})`}} />
                </a>
                <div className="news-text-box">
                    <h3>
                        <a href="/articles/single">{article.title}</a>
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
                    <a href={`/articles/${article._id}`} className="read-more-btn">
                        Read more <i className="fas fa-angle-right" />
                    </a>
                </div>
            </div>
        </div>
    );
};
