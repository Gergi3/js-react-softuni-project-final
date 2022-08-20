import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import * as articleServices from '../../services/articleServices'
import { validateArticleInput, isValidArticle } from '../../validators/articleValidator'

import { AuthContext } from "../../contexts/AuthContext";
import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { FormWrapper } from "../shared/form-wrapper/FormWrapper";
import { FormInput } from "../shared/form-input/FormInput";
import './ArticleCreate.scss';

export const ArticleCreate = ({
    isEdit,
    isDelete
}) => {
    const [game, setGame] = useState({});
    const [form, setForm] = useState({
        title: '',
        imageUrl: '',
        summary: '',
        description: '',
    })
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isEdit && !isDelete) {
            return
        }

        articleServices.getById(id)
            .then(res => {
                setForm({
                    title: res.title,
                    imageUrl: res.imageUrl,
                    summary: res.summary,
                    description: res.description,
                })
                setGame(res);
            })
            .catch(() => navigate('/404'))
    }, [id, isDelete, isEdit, navigate]);

    if (game.owner && user && (isEdit || isDelete) && user._id !== game.owner._id) {
        return <Navigate to="/login" replace={true} />
    }

    const inputChangeHandler = (e) => {
        setForm(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));
    }

    const createSubmitHandler = (e) => {
        e.preventDefault();
        articleServices.create(form)
            .then(res => navigate(`/articles/${res._id}`))
            .catch(err => console.log(err))
    }

    const editSubmitHandler = (e) => {
        e.preventDefault();
        articleServices.editById(id, form)
            .then(() => navigate(`/articles/${id}`))
            .catch(err => console.log(err));
    }

    const deleteSubmitHandler = (e) => {
        e.preventDefault();
        articleServices.deleteById(id)
            .then(() => navigate('/articles'))
            .then(err => console.log(err));
    }

    let handler;
    let btnText;
    if (isEdit) {
        handler = editSubmitHandler;
        btnText = 'Edit';
    } else if (isDelete) {
        handler = deleteSubmitHandler;
        btnText = 'Delete';
    } else {
        handler = createSubmitHandler;
        btnText = 'Create';
    }

    return (
        <>
            <Breadcrumb
                title={`${btnText} article`}
                secondaryTitle={`${btnText} your article`}
            />

            <FormWrapper title={`${btnText} article`}>
                <form onSubmit={handler}>
                    <FormInput
                        value={form.title}
                        name="title"
                        type="text"
                        placeholder="Title"
                        changeHandler={inputChangeHandler}
                        validator={validateArticleInput}
                        disabled={isDelete}
                    />
                    <FormInput
                        value={form.imageUrl}
                        name="imageUrl"
                        type="text"
                        placeholder="Image URL"
                        changeHandler={inputChangeHandler}
                        validator={validateArticleInput}
                        disabled={isDelete}
                    />
                    <FormInput
                        isTextarea
                        value={form.summary}
                        name="summary"
                        placeholder="Write a short summary"
                        changeHandler={inputChangeHandler}
                        validator={validateArticleInput}
                        disabled={isDelete}
                    />
                    <FormInput
                        isTextarea
                        value={form.description}
                        name="description"
                        placeholder="Write a description"
                        changeHandler={inputChangeHandler}
                        validator={validateArticleInput}
                        disabled={isDelete}
                    />
                    <p>
                        <input
                            type="submit"
                            className="boxed-btn"
                            value={btnText}
                            disabled={!isValidArticle(form)}
                        />
                    </p>
                </form>
            </FormWrapper>
        </>
    );
};
