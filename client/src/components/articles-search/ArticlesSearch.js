import { useState } from 'react';
import './ArticlesSearch.scss'

export const ArticlesSearch = ({
    searchHandler
}) => {
    const [form, setForm] = useState({
        search: '',
        criteria: 'title'
    });

    const submitHandler = (e) => {
        e.preventDefault();
        searchHandler(form);
    }

    const inputChangeHandler = (e) => {
        setForm(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <form className="footer-box subscribe pt-50" onSubmit={submitHandler}>
            <input
                value={form.search}
                name="search"
                type="text"
                placeholder="Search"
                onChange={inputChangeHandler}
            />
            
            <select
                value={form.criteria}
                name="criteria"
                placeholder="Criteria"
                onChange={inputChangeHandler}
            >
                <option value="title">Title</option>
                <option value="summary">Summary</option>
                <option value="description">Description</option>
            </select>

            <button type="submit">
                <i className="fas fa-paper-plane" />
            </button>
        </form>
    )
};
