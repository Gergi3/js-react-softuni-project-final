export const CommentsItem = () => {
    return (
        <div className="single-comment-body">
            <div className="comment-user-avater">
                <img src="assets/img/avaters/avatar2.png" alt="" />
            </div>
            <div className="comment-text-body">
                <h4>
                    Addy Aoe{" "}
                    <span className="comment-date">May 12, 2020</span>{" "}
                    {/* <a href="#">reply</a> */}
                </h4>
                <p>
                    Nunc risus ex, tempus quis purus ac, tempor consequat ex.
                    Vivamus sem magna, maximus at est id, maximus aliquet
                    nunc. Suspendisse lacinia velit a eros porttitor, in
                    interdum ante faucibus Suspendisse lacinia velit a eros
                    porttitor, in interdum ante faucibus.
                </p>
            </div>
        </div>
    );
};
