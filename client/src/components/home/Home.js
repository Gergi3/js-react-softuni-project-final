import { Link } from "react-router-dom";
import { ArticlesList } from "../articles-list/ArticlesList";

import './Home.scss'

export const Home = () => {
    return (
        <>
            {/* hero area */}
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
            {/* end hero area */}

            {/* latest news */}
            <div className="container">
                <ArticlesList pagination={false}/>
            </div>
            {/* end latest news */}
        </>
    );
};
