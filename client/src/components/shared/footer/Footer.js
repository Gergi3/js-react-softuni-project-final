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
                                <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                                    <li>support@fruitkha.com</li>
                                    <li>+00 111 222 3333</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="footer-box pages">
                                <h2 className="widget-title">Pages</h2>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="news.html">News</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
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
