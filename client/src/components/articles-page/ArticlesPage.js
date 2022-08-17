import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { ArticlesList } from '../articles-list/ArticlesList'
import './ArticlesPage.scss';

export const ArticlesPage = () => {
    return (
        <>
            <Breadcrumb
                title="Articles"
                secondaryTitle="The best of the best"
            />
            
            <div className="container">
                <div className="col-lg-8 col-md-8 mx-auto pt-50">
                    <div className="footer-box subscribe">
                        <form>
                            <input type="email" placeholder="Search" />
                            <button type="submit">
                                <i className="fas fa-paper-plane" />
                            </button>
                        </form>
                    </div>
                </div>
                
                <ArticlesList pagination={true} />
            </div>
        </>
    );
};
