import { Link } from 'react-router-dom';
import './Header.scss'

export const Header = () => {
    return (
        <div className="top-header-area" id="sticker">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <div className="main-menu-wrap">
                            <div className="site-logo">
                                <Link to="/">
                                    <img src="/img/home.png" alt="Home" />
                                </Link>
                            </div>
                            <nav className="main-menu">
                                <ul>
                                    <li className="current-list-item">
                                        <Link to="/articles">Articles</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to="/articles">Articles</Link>
                                            </li>
                                            <li>
                                                <Link to="/articles">My Articles</Link>
                                            </li>
                                            <li>
                                                <Link to="/articles/create">Create Articles</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#">Others</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to="/contact">Contact us</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About us</Link>
                                            </li>
                                            <li>
                                                <Link to="/404">404 page</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Register</Link>
                                    </li>
                                    <li>
                                        <Link to="/logout">Logout</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
