import './FormWrapper.scss'

export const FormWrapper = ({
    children,
    title
}) => {
    return (
        <div className="checkout-section mt-150 mb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="checkout-accordion-wrap">
                            <div className="accordion" id="accordionExample">
                                <div className="card single-accordion">
                                    <div className="card-header" id="headingOne">
                                        <h4 className="pt-40 pl-35">{title}</h4>
                                    </div>
                                    <div className="collapse show">
                                        <div className="card-body">
                                            <div className="billing-address-form">
                                                {children}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
