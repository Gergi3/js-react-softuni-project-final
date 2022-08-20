import { useContext, useState } from "react";

import * as commentServices from '../../../../services/commentServices'
import { validateCommentInput, isValidComment } from "../../../../validators/commentValidator";

import { parseDate } from "../../../../helpers/appHelpers";
import { AuthContext } from "../../../../contexts/AuthContext";
import { FormInput } from "../../../shared/form-input/FormInput";

export const CommentsItem = ({
    comment,
    commentHandler
}) => {
    const { user } = useContext(AuthContext);
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const [form, setForm] = useState({
        text: comment.text
    })

    const changeHandler = (e) => {
        setForm({text: e.target.value})
    } 

    const editHandler = (e) => {
        e.preventDefault();
        commentServices.edit(comment._id, form)
            .then(() => {
                commentHandler();
                setIsEdit(false);
            })
            .catch(err => console.log(err));
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        commentServices.del(comment._id)
            .then(() => {
                commentHandler();
                setIsDelete(false);
            })
            .catch(err => console.log(err));
    }

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
                        {user?._id === comment.owner._id && !isEdit && !isDelete &&
                            <>
                                <button className="boxed-btn ml-10 mr-5" onClick={() => setIsEdit(true)}>Edit</button>
                                <button className="boxed-btn" onClick={() => setIsDelete(true)}>Delete</button>
                            </>
                        }
                    </h4>
                    {isEdit &&
                        <form onSubmit={editHandler}>
                            <FormInput
                                value={form.text}
                                type="text"
                                name="text"
                                changeHandler={changeHandler}
                                validator={validateCommentInput}
                            />

                            <input type="submit" className="mt-10" value="Edit" disabled={!isValidComment(form)} />
                        </form>
                    }
                    {isDelete &&
                        <form onSubmit={deleteHandler}>
                            <FormInput
                                value={form.text}
                                type="text"
                                name="text"
                                changeHandler={changeHandler}
                                validator={validateCommentInput}
                                disabled={true}
                            />

                            <input type="submit" className="mt-10" value="Delete" />
                        </form>
                    }
                    {!isEdit && !isDelete &&
                        comment.text
                    } 

                </div>
            </div>
    );
};
