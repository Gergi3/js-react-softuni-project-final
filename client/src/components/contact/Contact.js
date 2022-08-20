import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb"
import './Contact.scss';

export const Contact = () => {

    return (
        <>
            <Breadcrumb
                title="Contact us"
                secondaryTitle="Have any questions?"
            />

            <div className="contact-from-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-form-wrap">
                                <div className="contact-form-box">
                                    <h4>
                                        <i className="far fa-clock" />
                                        Active contact hours
                                    </h4>
                                    <p>
                                        MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM
                                    </p>
                                </div>
                                <div className="contact-form-box">
                                    <h4>
                                        <i className="fas fa-address-book" /> Contact
                                    </h4>
                                    <p>
                                        Phone: <a href="tel:+359894445555"> +359 89 444 5555</a> <br />
                                        Email: <a href="mailto:support@gaming.com">support@gaming.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}