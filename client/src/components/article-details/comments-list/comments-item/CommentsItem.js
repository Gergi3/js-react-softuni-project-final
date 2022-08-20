import { parseDate } from "../../../../helpers/appHelpers";

export const CommentsItem = ({
    comment
}) => {
    return (
        <div className="single-comment-body">
            <div className="comment-user-avater">
                <img src="assets/img/avaters/avatar2.png" alt="" />
            </div>
            <div className="comment-text-body">
                <h4>
                    {comment.owner.email}
                    <span className="comment-date">{parseDate(comment.createdAt)}</span>
                    {/* <a href="#">reply</a> */}
                </h4>
                <p>
                    {comment.text}
                </p>
            </div>
        </div>
    );
};
