import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import * as articleServices from '../../services/articleServices'

import { AuthContext } from "../../contexts/AuthContext";
import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { FormWrapper } from "../shared/form-wrapper/FormWrapper";
import './ArticleCreate.scss';

export const ArticleCreate = ({
    isEdit,
    isDelete
}) => {
    const [error, setError] = useState(null);
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
        if (isEdit || isDelete) {
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
                .catch(err => navigate('/404'))
        }
    }, [id, isDelete, isEdit, navigate]);

    if ((isEdit || isDelete) && user._id === game.owner._id) {
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
            .then(() => navigate('/articles'))
            .catch(err => setError(err?.message))
    }

    const editSubmitHandler = (e) => {
        e.preventDefault();
        articleServices.editById(id, form)
            .then(() => navigate(`/articles/${id}`))
            .catch(err => setError(err?.message));
    }

    const deleteSubmitHandler = (e) => {
        e.preventDefault();
        articleServices.deleteById(id)
            .then(() => navigate('/articles'))
            .then(err => setError(err?.message));
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
                <p>{error}</p>
                <form onSubmit={handler}>
                    <p>
                        <input
                            type="text"
                            placeholder="Title"
                            onChange={inputChangeHandler}
                            value={form.title}
                            name="title"
                            disabled={isDelete}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="Image URL"
                            onChange={inputChangeHandler}
                            value={form.imageUrl}
                            name="imageUrl"
                            disabled={isDelete}
                        />
                    </p>
                    <p>
                        <textarea
                            onChange={inputChangeHandler}
                            value={form.summary}
                            name="summary"
                            id="summary"
                            placeholder="Write a short summary"
                            disabled={isDelete}
                        />
                    </p>
                    <p>
                        <textarea
                            onChange={inputChangeHandler}
                            value={form.description}
                            name="description"
                            id="description"
                            placeholder="Write a description"
                            disabled={isDelete}
                        />
                    </p>
                    <p>
                        <input
                            type="submit"
                            className="boxed-btn"
                            value={btnText}
                        />
                    </p>
                </form>
            </FormWrapper>
        </>
    );
};
