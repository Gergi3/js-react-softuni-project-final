import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as articleServices from '../../services/articleServices'

import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { FormWrapper } from "../shared/form-wrapper/FormWrapper";
import './ArticleCreate.scss';

export const ArticleCreate = ({
    isEdit
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
        if (isEdit) {
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
    }, [id, isEdit, navigate])

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
            .catch(err => setError(err.message))
    }

    const editSubmitHandler = (e) => {
        e.preventDefault();
        articleServices.editById(id, form)
            .then(res => navigate(`/articles/${id}`))
            .catch(err => setError(err.message));
    }

    return (
        <>
            <Breadcrumb
                title="Create article"
                secondaryTitle="Share your writing"
            />

            <FormWrapper title="Create article">
                <p>{error}</p>
                <form onSubmit={isEdit ? editSubmitHandler : createSubmitHandler}>
                    <p>
                        <input
                            type="text"
                            placeholder="Title"
                            onChange={inputChangeHandler}
                            value={form.title}
                            name="title"
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="Image URL"
                            onChange={inputChangeHandler}
                            value={form.imageUrl}
                            name="imageUrl"
                        />
                    </p>
                    <p>
                        <textarea
                            onChange={inputChangeHandler}
                            value={form.summary}
                            name="summary"
                            id="summary"
                            placeholder="Write a short summary"
                        />
                    </p>
                    <p>
                        <textarea
                            onChange={inputChangeHandler}
                            value={form.description}
                            name="description"
                            id="description"
                            placeholder="Write a description"
                        />
                    </p>
                    <p>
                        <input
                            type="submit"
                            className="boxed-btn"
                            value="Submit"
                        />
                    </p>
                </form>
            </FormWrapper>
        </>
    );
};
