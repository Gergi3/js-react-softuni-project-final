import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as articleServices from '../../services/articleServices'

import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { FormWrapper } from "../shared/form-wrapper/FormWrapper";
import './ArticleCreate.scss';

export const ArticleCreate = ({
    isEdit,
    isDelete
}) => {
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        title: '',
        imageUrl: '',
        summary: '',
        description: '',
    })
    const navigate = useNavigate();
    const { id } = useParams();

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
                })
                .catch(err => navigate('/404'))
        }
    }, [id, isDelete, isEdit, navigate])

    const inputChangeHandler = (e) => {
        setForm(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));
    }
    
    const createSubmitHandler = (e) => {
        e.preventDefault();
        articleServices.create(form)
            .then(res => navigate('/articles'))
            .catch(err => setError(err?.message))
    }

    const editSubmitHandler = (e) => {
        e.preventDefault();
        articleServices.editById(id, form)
            .then(res => navigate(`/articles/${id}`))
            .catch(err => setError(err?.message));
    }

    const deleteSubmitHandler = (e) => {
        e.preventDefault();
        articleServices.deleteById(id)
            .then(res => navigate('/articles'))
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
