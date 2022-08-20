import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { PrivateGuard } from './components/shared/guards/PrivateGuard'
import { PublicGuard } from './components/shared/guards/PublicGuard'
import { Footer } from './components/shared/footer/Footer';
import { Header } from './components/shared/header/Header';
import { Home } from './components/home/Home';
import { Contact } from './components/contact/Contact';
import { About } from './components/about/About';
import { ArticleCUD } from './components/article-cud/ArticleCUD';
import { ArticlesPage } from './components/articles-page/ArticlesPage';
import { ArticleDetails } from './components/article-details/ArticleDetails';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Logout } from './components/logout/Logout';
import { NotFound } from './components/not-found/NotFound';
import './App.scss';

export const App = () => {
    return (
        <div>
            <AuthProvider>
                <Header />
                
                <Routes>
                    <Route element={<PrivateGuard />}>
                        <Route path="/my-articles" element={<ArticlesPage isUserArticles={true} />} />
                        <Route path="/articles/create" element={<ArticleCUD />} />
                        <Route path="/articles/edit/:id" element={<ArticleCUD isEdit={true} />} />
                        <Route path="/articles/delete/:id" element={<ArticleCUD isDelete={true} />} />
                        <Route path="/logout" element={<Logout />} />
                    </Route>

                    <Route element={<PublicGuard />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<ArticlesPage />} />
                    <Route path="/articles/:id" element={<ArticleDetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </AuthProvider>
        </div>
    );
}
