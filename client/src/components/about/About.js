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
                                    Why <span className="orange-text">US</span> and not someone <span className="orange-text">else</span>
                                </h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-shipping-fast" />
                                            </div>
                                            <div className="content">
                                                <h3>Good Moderation</h3>
                                                <p>
                                                    We have a good and experienced moderation team which is 24/7 on willing to help.
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
                                                <h3>Being paid</h3>
                                                <p>
                                                    By having the most viewed articles you can win a series of cash and other prizes.
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
                                                <h3>Friendly community</h3>
                                                <p>
                                                    We have one of the most friendly and non-toxic communities.
                                                    We do not tolerate hatred and are quick to take action if needed.
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
                                                <h3>Most recent information</h3>
                                                <p>
                                                    Due to our popularity we have a big number of users which always keep the information on their articles up to date.
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