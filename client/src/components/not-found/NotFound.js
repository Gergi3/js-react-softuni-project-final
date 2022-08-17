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

            <div class="full-height-section error-section">
                <div class="full-height-tablecell">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2 text-center">
                                <div class="error-text">
                                    <i class="far fa-sad-cry"></i>
                                    <h1>Oops! Not Found.</h1>
                                    <p>The page you requested for is not found.</p>
                                    <Link to="/" class="boxed-btn">Back to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
