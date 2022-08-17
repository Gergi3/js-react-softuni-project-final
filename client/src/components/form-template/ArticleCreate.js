import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";

export const ArticleCreate = (params) => {
    return (
        <>
            <Breadcrumb
                title="Create article"
                secondaryTitle="Share your writing"
            />

            <div className="checkout-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="checkout-accordion-wrap">
                                <div className="accordion" id="accordionExample">
                                    <div className="card single-accordion">
                                        <div className="card-header" id="headingOne">
                                            <h4 className="pt-40 pl-35"> 
                                                    Create Article
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="collapse show"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <div className="billing-address-form">
                                                    <form action="index.html">
                                                        <p>
                                                            <input type="text" placeholder="Name" />
                                                        </p>
                                                        <p>
                                                            <input type="email" placeholder="Email" />
                                                        </p>
                                                        <p>
                                                            <input type="number" placeholder="Address" />
                                                        </p>
                                                        <p>
                                                            <input type="tel" placeholder="Phone" />
                                                        </p>
                                                        <p>
                                                            <textarea
                                                                name="bill"
                                                                id="bill"
                                                                cols={30}
                                                                rows={10}
                                                                placeholder="Say Something"
                                                                defaultValue={""}
                                                            />
                                                        </p>
                                                        <p>
                                                            <input
                                                                type="submit"
                                                                className="boxed-btn"
                                                                defaultValue="Submit"
                                                            />
                                                        </p>
                                                    </form>
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
        </>
    );
};
