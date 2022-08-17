import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import './Header.scss'

export const Header = () => {
    const { user } = useContext(AuthContext);

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
                                    {/* className="current-list-item" */}
                                    <li >
                                        {user.accessToken
                                            ? (
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/articles">Articles</Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/articles">My Articles</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/articles/create">Create Article</Link>
                                                    </li>
                                                </ul>
                                            )
                                            : (
                                                <Link to="/articles">Articles</Link>
                                            )
                                        }
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About us</Link>
                                    </li>
                                    {user.accessToken
                                        ? (
                                            <li>
                                                <Link to="/logout">Logout</Link>
                                            </li>
                                        )
                                        : (
                                            <>
                                                <li>
                                                    <Link to="/login">Login</Link>
                                                </li>
                                                <li>
                                                    <Link to="/register">Register</Link>
                                                </li>
                                            </>
                                        )
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
