import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as articleServices from '../../services/articleServices'

import { Breadcrumb } from "../shared/breadcrumb/Breadcrumb";
import { FormWrapper } from "../shared/form-wrapper/FormWrapper";
import './ArticleCreate.scss';

export const ArticleCreate = (params) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        title: '',
        imageUrl: '',
        summary: '',
        description: '',
    })

    const inputChangeHandler = (e) => {
        setForm(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        articleServices.create(form)
            .then(res => navigate('/articles'))
            .catch(err => setError(err.message))
    }

    return (
        <>
            <Breadcrumb
                title="Create article"
                secondaryTitle="Share your writing"
            />

            <FormWrapper title="Create article">
                <p>{error}</p>
                <form onSubmit={submitHandler}>
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
                            name="Summary"
                            id="summary"
                            cols={30}
                            rows={10}
                            placeholder="Write a short summary"
                        />
                    </p>
                    <p>
                        <textarea
                            onChange={inputChangeHandler}
                            value={form.description}
                            name="description"
                            id="description"
                            cols={30}
                            rows={10}
                            placeholder="Write a description"
                        />
                    </p>
                    <p>
                        <input
                            type="submit"
                            className="boxed-btn"
                            defaultValue="Submit"
                        />
                    </p>
                </form>
            </FormWrapper>
        </>
    );
};
