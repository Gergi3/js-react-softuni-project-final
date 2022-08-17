export const ArticleItem = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-latest-news">
                <a href="/articles/single">
                    <div className="latest-news-bg news-bg-1" />
                </a>
                <div className="news-text-box">
                    <h3>
                        <a href="/articles/single">
                            You will vainly look for fruit on it in autumn.
                        </a>
                    </h3>
                    <p className="blog-meta">
                        <span className="author">
                            <i className="fas fa-user" /> Admin
                        </span>
                        <span className="date">
                            <i className="fas fa-calendar" /> 27 December, 2019
                        </span>
                    </p>
                    <p className="excerpt">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatibus laborum autem, dolores inventore, beatae nam.
                    </p>
                    <a href="/articles/single" className="read-more-btn">
                        read more <i className="fas fa-angle-right" />
                    </a>
                </div>
            </div>
        </div>
    );
};
