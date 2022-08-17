import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">About us</h2>
                                <p>Blog with a lot of users that mainly make articles about games and others things. Create an account and join us in our journey!</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>Bulgaria, Sofia, Mladost, Ivan Enev 13</li>
                                    <li>support@gaming.com</li>
                                    <li>+359 89 444 5555</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="footer-box pages">
                                <h2 className="widget-title">Pages</h2>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/articles">Articles</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p>Copyrights &copy; 2019 - <a href="https://imransdesign.com/">Imran Hossain</a>,  All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 text-right col-md-12">
                            <div className="social-icons">
                                <ul>
                                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
