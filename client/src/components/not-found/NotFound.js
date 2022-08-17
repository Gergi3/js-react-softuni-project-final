import { Link } from "react-router-dom";

import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import './NotFound.scss';

export const NotFound = () => {
    return (
        <>
            <Breadcrumb
                title="404"
                secondaryTitle="Not found"
            />

            <div className="full-height-section error-section">
                <div className="full-height-tablecell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="error-text">
                                    <i className="far fa-sad-cry"></i>
                                    <h1>Oops! Not Found.</h1>
                                    <p>The page you requested for is not found.</p>
                                    <Link to="/" className="boxed-btn">Back to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
