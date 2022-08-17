import './App.scss';

function App() {

    
    return (
        <>
            {/* header */}
            <div className="top-header-area" id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                {/* logo */}
                                <div className="site-logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo.png" alt="" />
                                    </a>
                                </div>
                                {/* logo */}
                                {/* menu start */}
                                <nav className="main-menu">
                                    <ul>
                                        <li className="current-list-item">
                                            <a href="news.html">News</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="news.html">News</a>
                                                </li>
                                                <li>
                                                    <a href="single-news.html">Single News</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li>
                                            <a href="checkout.html">Register/Login/Create/Edit</a>
                                        </li>
                                        <li>
                                            <a href="404.html">404 page</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* menu end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end header */}
        </>
    );
}

export default App;
