import { useState } from 'react';

import { validateCommentInput, isValidComment } from '../../../validators/commentValidator';
import * as commentServices from '../../../services/commentServices';

import { FormInput } from '../../shared/form-input/FormInput';
import './CommentsCreate.scss'

export const CommentsCreate = ({
    articleId,
    commentHandler
}) => {
    const [text, setText] = useState('');

    const commentChangeHandler = (e) => {
        setText(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        commentServices.create(articleId, { text })
            .then(() => {
                setText('');
                commentHandler()
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="comment-template">
            <h4>Leave a comment</h4>
            <p>
                If you have a comment dont feel hesitatent to send it.
                We're a friendly community.
            </p>
            <form onSubmit={submitHandler}>
                <FormInput
                    isTextarea={true}
                    value={text}
                    name="text"
                    placeholder="Your Message.."
                    changeHandler={commentChangeHandler}
                    validator={validateCommentInput}
                />
                <p>
                    <input
                        type="submit"
                        value="Submit"
                        disabled={!isValidComment({ text })}
                    />
                </p>
            </form>
        </div>
    );
};
