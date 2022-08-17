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
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="form-title">
                                <h2>Have you got any question?</h2>
                                <p>
                                    Send us an email with the form below. One of our assistants will try to contact you by mail as soon as possible.
                                </p>
                            </div>
                            <div id="form_status" />
                            <div className="contact-form">
                                <form type="POST" id="fruitkha-contact">
                                    <p>
                                        <input type="text" placeholder="Name" name="name" id="name" />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            id="email"
                                        />
                                    </p>
                                    <p>
                                        <input type="tel" placeholder="Phone" name="phone" id="phone" />
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            name="subject"
                                            id="subject"
                                        />
                                    </p>
                                    <p>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Message"
                                        />
                                    </p>
                                    <p>
                                        <input type="submit" value="Send email" />
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-form-wrap">
                                <div className="contact-form-box">
                                    <h4>
                                        <i className="far fa-clock" />
                                        Active contact hours
                                    </h4>
                                    <p>
                                        MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM{" "}
                                    </p>
                                </div>
                                <div className="contact-form-box">
                                    <h4>
                                        <i className="fas fa-address-book" /> Contact
                                    </h4>
                                    <p>
                                        Phone: +359 89 444 5555 <br /> Email: support@gaming.com
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