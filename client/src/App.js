import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/shared/footer/Footer';
import { Header } from './components/shared/header/Header';
import { Home } from './components/home/Home';
import { Contact } from './components/contact/Contact';
import { About } from './components/about/About';
import { ArticleCreate } from './components/article-create/ArticleCreate';
import { ArticlesPage } from './components/articles-page/ArticlesPage';
import { ArticleDetails } from './components/article-details/ArticleDetails';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Logout } from './components/logout/Logout';
import { NotFound } from './components/not-found/NotFound';
import './App.scss';
import { AuthProvider } from './contexts/AuthContext';

export const App = () => {
    return (
        <div>
            <AuthProvider>
                <Header />
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<ArticlesPage />} />
                    <Route path="/my-articles" element={<ArticlesPage isUserArticles={true} />} />
                    <Route path="/articles/:id" element={<ArticleDetails />} />
                    <Route path="/articles/create" element={<ArticleCreate />} />
                    <Route path="/articles/edit/:id" element={<ArticleCreate isEdit={true} />} />
                    <Route path="/articles/delete/:id" element={<ArticleCreate isDelete={true} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </AuthProvider>
        </div>
    );
}
