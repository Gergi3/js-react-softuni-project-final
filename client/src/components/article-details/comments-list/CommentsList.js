import { CommentsItem } from './comments-item/CommentsItem';
import './CommentsList.scss'

export const CommentsList = () => {
    return (
        <div className="comments-list-wrap">
            <h3 className="comment-count-title">3 Comments</h3>
            <div className="comment-list">
                <CommentsItem />
                <CommentsItem />
                <CommentsItem />
            </div>
        </div>
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