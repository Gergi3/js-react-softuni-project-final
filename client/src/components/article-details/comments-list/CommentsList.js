import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as commentServices from '../../../services/commentServices';

import { CommentsCreate } from "../comments-create/CommentsCreate";
import { AuthContext } from "../../../contexts/AuthContext";
import { CommentsItem } from './comments-item/CommentsItem';
import './CommentsList.scss'

export const CommentsList = ({
    articleId
}) => {
    const [comments, setComments] = useState([]);
    const { user } = useContext(AuthContext)

    const fetchComments = useCallback(() => {
        commentServices.getAllByArticleId(articleId)
            .then(res => setComments(res))
            .catch(err => console.log(err));
    }, [articleId]);

    useEffect(() => fetchComments(), [fetchComments]);

    const createCommentHandler = () => fetchComments();

    return (
        <>
            <div className="comments-list-wrap">
                <h3 className="comment-count-title">{comments.length} Comments</h3>
                <div className="comment-list">
                    {comments.map(comment =>
                        <CommentsItem key={comment._id} comment={comment}/>
                    )}
                </div>
            </div>
            {user.accessToken
                ? (
                    <CommentsCreate
                        articleId={articleId}
                        createCommentHandler={createCommentHandler}
                    />
                )
                : (
                    <p>
                        If you want to leave a comment you need to <Link to="/login">log in</Link> your account
                        or if you dont have an account you can go <Link to="/register">register</Link> one.
                    </p>
                )
            }
        </>
    );
};




// const Reply = () => {
//     <div className="single-comment-body">
//                     <div className="comment-user-avater">
//                         <img src="assets/img/avaters/avatar1.png" alt="" />
//                     </div>
//                     <div className="comment-text-body">
//                         <h4>
//                             Jenny Joe{" "}
//                             <span className="comment-date">Aprl 26, 2020</span>{" "}
//                             <a href="#">reply</a>
//                         </h4>
//                         <p>
//                             Nunc risus ex, tempus quis purus ac, tempor consequat ex.
//                             Vivamus sem magna, maximus at est id, maximus aliquet
//                             nunc. Suspendisse lacinia velit a eros porttitor, in
//                             interdum ante faucibus Suspendisse lacinia velit a eros
//                             porttitor, in interdum ante faucibus.
//                         </p>
//                     </div>
//                     <div className="single-comment-body child">
//                         <div className="comment-user-avater">
//                             <img src="assets/img/avaters/avatar3.png" alt="" />
//                         </div>
//                         <div className="comment-text-body">
//                             <h4>
//                                 Simon Soe{" "}
//                                 <span className="comment-date">Aprl 27, 2020</span>{" "}
//                                 <a href="#">reply</a>
//                             </h4>
//                             <p>
//                                 Nunc risus ex, tempus quis purus ac, tempor consequat
//                                 ex. Vivamus sem magna, maximus at est id, maximus
//                                 aliquet nunc. Suspendisse lacinia velit a eros
//                                 porttitor, in interdum ante faucibus.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
// }