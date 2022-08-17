import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb"
import './About.scss';

export const About = () => {

    return (
        <>
            <Breadcrumb
                title="About us"
                secondaryTitle="Get to know us better"
            />
            <div className="feature-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="featured-text">
                                <h2 className="pb-3">
                                    Why <span className="orange-text">Fruitkha</span>
                                </h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-shipping-fast" />
                                            </div>
                                            <div className="content">
                                                <h3>Home Delivery</h3>
                                                <p>
                                                    sit voluptatem accusantium dolore mque laudantium, totam
                                                    rem aperiam, eaque ipsa quae ab illo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-money-bill-alt" />
                                            </div>
                                            <div className="content">
                                                <h3>Best Price</h3>
                                                <p>
                                                    sit voluptatem accusantium dolore mque laudantium, totam
                                                    rem aperiam, eaque ipsa quae ab illo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-briefcase" />
                                            </div>
                                            <div className="content">
                                                <h3>Custom Box</h3>
                                                <p>
                                                    sit voluptatem accusantium dolore mque laudantium, totam
                                                    rem aperiam, eaque ipsa quae ab illo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-sync-alt" />
                                            </div>
                                            <div className="content">
                                                <h3>Quick Refund</h3>
                                                <p>
                                                    sit voluptatem accusantium dolore mque laudantium, totam
                                                    rem aperiam, eaque ipsa quae ab illo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}