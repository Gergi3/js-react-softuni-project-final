import { Link } from "react-router-dom";
import { ArticlesList } from "../articles-list/ArticlesList";

import './Home.scss'

export const Home = () => {
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

                <ArticlesList pagination={false} />
            </div>
        </>
    );
};
